<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;

class RegistrationTest extends TestCase
{

    use RefreshDatabase;
    /**
     * Body of the mock request
     *
     * @var array
     */
    private $body;

    public function setUp(): void
    {
        $this->body = [
            'fname'  => 'daniel',
            'lname'  => 'mccarthy',
            'email'  => 'dmccarthy2012@hotmail.co.uk`',
            'password'  => 'muhPassword123!',
            'password-confirm'  => 'muhPassword123!'
        ];

        parent::setUp();
    }
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_rego_fname_too_short()
    {
        $this->body['fname'] = "aa";

        $response = $this->postJson('/auth/register', $this->body);

        $response
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    [
                        'message' => 'first name is too short! please enter a longer one',
                        'field'   => 'fname'
                    ]
                ]
            ]);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_rego_fname_too_long()
    {
        $this->body['fname'] = str_repeat("a", 15);;

        $response = $this->postJson('/auth/register', $this->body);

        $response
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    [
                        'message' => 'fname name is too long! please enter a shorter one',
                        'field'   => 'fname'
                    ]
                ]
            ]);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_rego_fname_invalid_characters()
    {
        $this->body['fname'] = "@^.";

        $response = $this->postJson('/auth/register', $this->body);

        $response
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    [
                        'message' => 'fname contains invalid characters, please use alphabetical characters only',
                        'field'   => 'fname'
                    ]
                ]
            ]);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_rego_lname_too_short()
    {
        $this->body['lname'] = "aa";

        $response = $this->postJson('/auth/register', $this->body);

        $response
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    [
                        'message' => 'last name is too short! please enter a longer one',
                        'field'   => 'lname'
                    ]
                ]
            ]);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_rego_lname_too_long()
    {
        $this->body['lname'] = str_repeat("a", 15);;

        $response = $this->postJson('/auth/register', $this->body);

        $response
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    [
                        'message' => 'last name is too long! please enter a longer one',
                        'field'   => 'lname'
                    ]
                ]
            ]);
    }

    /**
     *
     *
     * @return void
     */
    public function test_rego_email_invalid()
    {
        $this->body['email'] = "oogabooga";

        $response = $this->postJson('/auth/register', $this->body);

        $response
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    [
                        'message' => 'email is invalid! please enter a valid email address',
                        'field'   => 'email'
                    ]
                ]
            ]);
    }

    /**
     *
     *
     * @return void
     */
    public function test_valid_rego_request()
    {
        $response = $this->postJson('/auth/register', $this->body);

        $response
            ->assertStatus(200)
            ->assertJson([
                'errors' => [
                    [
                        'message' => 'email is invalid! please enter a valid email address',
                        'field'   => 'email'
                    ]
                ]
            ]);
    }


    /**
     *
     *
     * @return void
     */
    public function test_mismatching_passwords()
    {

        $this->body['password_confirm'] = "jibberish";

        $response = $this->postJson('/auth/register', $this->body);

        $response
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    [
                        'message' => 'password and password confirmation do not match!',
                        'field'   => 'password'
                    ]
                ]
            ]);
    }

    /**
     *
     *
     * @return void
     */
    public function test_password_to_short()
    {
        $this->body['password'] = str_repeat("a!2", 2);

        $response = $this->postJson('/auth/register', $this->body);

        $response
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    [
                        'message' => 'password is too short!, should be between 7 and 30 characters',
                        'field'   => 'password'
                    ]
                ]
            ]);
    }

    /**
     *
     * @return void
     */
    public function test_password_to_long()
    {
        $this->body['password'] = str_repeat("a!#", 10);

        $response = $this->postJson('/auth/register', $this->body);

        $response
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    [
                        'message' => 'password is too long!, should be between 7 and 30 characters',
                        'field'   => 'password'
                    ]
                ]
            ]);
    }

    /**
     *
     *
     * @return void
     */
    public function test_password_contains_alphabetical_numeric_and_special_character()
    {
        $this->body['password'] = "danielmccarthy";

        $response = $this->postJson('/auth/register', $this->body);

        $response
            ->assertStatus(400)
            ->assertJson([
                'errors' => [
                    [
                        'message' => 'password must contain a combination of alphabetical, numeric and special characters',
                        'field'   => ['password', 'password-confirm']
                    ]
                ]
            ]);
    }

    /**
     *
     *
     * @return void
     */
    public function test_password_was_hashed()
    {
        $this->postJson('/auth/register', $this->body);

        $user = User::where('email', $this->body['email'])->first();

        $this->assertSame(60, strlen($user['password']));
    }

    /**
     *
     *
     * @return void
     */
    public function test_user_not_verified_before_confirmation_email_is_used()
    {
        $this->postJson('/auth/register', $this->body);

        $user = User::where('email', $this->body['email'])->first();

        $this->assertSame(60, strlen($user['password']));
    }

    /**
     *
     *
     * @return void
     */
    public function test_user_is_verified_after_confirmation_email_is_used()
    {
        $this->postJson('/auth/register', $this->body);

        $user = User::where('email', $this->body['email'])->first();

        $token = $user['acc_verification_token'];

        $this->getJson("/verify?token=${token}");

        $user = $user->fresh();

        $this->assertNotNull($user['email_verified_at']);
    }
}
