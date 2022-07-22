<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class RestruantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->firstName(),
            'image' => fake()->imageUrl($width=640,$height=480,'food',true),
            'cover_image' => fake()->imageUrl($width=640,$height=480,'food',true), 
            'tags' => fake()->word(),
            'food_served' => fake()->word(),
            'delivery_time' => fake()->radnomNumber(2,false),
            'delivery_fee' => fake()->radnomNumber(2,false),

            
            // 'remember_token' => Str::random(10),
        ];
    }

    // /**
    //  * Indicate that the model's email address should be unverified.
    //  *
    //  * @return static
    //  */
    // public function unverified()
    // {
    //     return $this->state(function (array $attributes) {
    //         return [
    //             'email_verified_at' => null,
    //         ];
    //     });
    // }
}
