<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }

    /**
     * Return subset of userdata intended for FE
     *
     * @return void
     */
    public function getFEPayload()
    {
        return [
            "firstName" => $this->attributes['firstName'],
            "lastName"  =>  $this->attributes['lastName'],
            "email"  =>  $this->attributes['email'].
        ];
    }
}
