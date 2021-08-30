<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Session\Store as Session;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use App\Rules\validPassword;
use App\Models\User;
use Carbon\Carbon;
use App\Mail\ConfirmRegistration;

class AuthenticationController extends Controller
{
    /**
     * @var Request
     */
    protected $request;

    /**
     * @var Session
     */
    protected $session;

    /**
     * authentication controller constructor
     *
     * @param Request $request
     * @param Session $session
     */
    public function __construct(
        Request $request,
        Session $session
    ) {
        $this->session         = $session;
        $this->request         = $request;
    }

    /**
     * Login
     *
     * @return JsonResponse
     */
    public function login()
    {
        $email = $this->request->input("email");
        $password = $this->request->input("password");

        $userToBeLoggedIn = User::where("email", $email );

        if (Hash::check($password, $userToBeLoggedIn['password'])) {
            $this->session->put('authenticatedUser', $userToBeLoggedIn);
            return response()->json([
                "navigateTo" =>  "dashboard",
                "user"       =>  $userToBeLoggedIn->getFEPayload()
            ], 200);
       } else {
            return response()->json([
                "notification" =>  "Incorrect credentials",
            ], 400);
       }



    }

    /**
     * Confirm email rego email
     *
     * @return JsonResponse
     */
    public function verify()
    {

        $token = $this->request->input("token");
        $id = $this->request->input("id");

        $userRequestingVerification = User::find($id);

        if ($userRequestingVerification['verificationToken'] === $token) {
            $userRequestingVerification->emailVerifiedAt(Carbon::now());
            $this->session->put('authenticatedUser', $userRequestingVerification);
            return response()->json([
                "navigateTo" =>  "dashboard",
                "user"       =>  $userRequestingVerification->getFEPayload()
            ], 200);
        }

        redirect('/');

    }

    /**
     * Register new user
     *
     * @return JsonResponse
     */
    public function register()
    {
        $requestData = $this->request->all();

        $validationResults = $this->validateRegoInput($requestData);

        if ($validationResults->fails()) {
            return response()->json([
                "errors" =>  $validationResults->errors()->getMessages()
            ], 400);
        }

        $newlyRegisteredUser = User::create(
            array_merge(
                $this->request->only("firstName", "lastName", "email", "password"),
                [ "verificationToken" => bin2hex(random_bytes(12)) ]
            )
        );

        $this->session->put("user", $newlyRegisteredUser);

        Mail::to($newlyRegisteredUser)->send(new confirmRegistration($newlyRegisteredUser));

        return response()->json([
            "user" => $newlyRegisteredUser->getFEPayload(),
            "notification" => "Please complete registration using confirmation link in email sent to {$newlyRegisteredUser['email']}"
        ]);

    }

    private function validateRegoInput($requestData)
    {
        $rules = [
            'lastName'         => ['required', 'alpha', 'min:3', 'max:14'],
            'firstName'        => ['required', 'alpha', 'min:3', 'max:14'],
            'email'            => ['required', 'email', Rule::unique('users', 'email')],
            'password'         => ['required', 'min:7', 'max:30', new validPassword],
            'passwordConfirmation' => ['same:password'],
        ];

        $messages = [
            'firstName.required' => 'first name cannot be empty! please enter one',
            'firstName.alpha'    => 'first name contains invalid characters, please use alphabetical characters only',
            'firstName.max'     => 'first name name is too long! please enter a longer one',
            'firstName.min'     => 'first name is too short! please enter a longer one',

            'lastName.required' => 'last name cannot be empty! please enter one',
            'lastName.alpha'   => 'last name contains invalid characters, please use alphabetical characters only',
            'lastName.max'     => 'last name name is too long! please enter a longer one',
            'lastName.min'     => 'last name is too short! please enter a longer one',

            'email.required' => 'email cannot be empty! please enter one',
            'email.email'    => 'email is invalid! please enter a valid email address',

            'password.required' => 'password cannot be empty! please enter one',
            'password.max'     => 'password name is too long! please enter a longer one',
            'password.min'     => 'password name is too short! please enter a longer one',

            'passwordConfirmation.same:password' => 'first name cannot be empty! please enter one',
        ];

        return Validator::make($requestData, $rules, $messages);
    }

    private function sendRegistrationEmail() {

    }
}
