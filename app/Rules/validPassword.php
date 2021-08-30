<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class validPassword implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        // valid password must contain a
        // 1. lower case letter
        // 2. upper case letter
        // 3. digit
        // 4. special character
        return (
            preg_match('/[a-z]/', $value) &&
            preg_match('/[A-Z]/', $value) &&
            preg_match('/[0-9]/', $value) &&
            preg_match('/[!@#$%&?]/', $value)) ? true : false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'email is invalid! please enter a valid email address';
    }
}
