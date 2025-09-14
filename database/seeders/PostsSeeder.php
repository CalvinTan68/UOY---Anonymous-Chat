<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Posts;
use Faker\Factory as Faker;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $samplePosts = [
            'Just finished my final exams! The relief is real.',
            'Sometimes I wonder if I chose the right major...',
            'Made my first friend in college today. Small victories!',
            'The library at 3 AM hits different during finals week.',
            'Missing home more than I thought I would.',
            'Professor actually remembered my name today. Feeling seen!',
            'Survived my first presentation. My hands are still shaking.',
            'Found the perfect study spot on campus. Not sharing the location though!',
            'Imposter syndrome is real, but we keep pushing forward.',
            'Coffee count today: 5. Sleep hours: 2. Living the student life.',
        ];

        foreach (range(1, 30) as $index) {
            Posts::create([
                'username' => $faker->firstName . $faker->numberBetween(100, 999),
                'posts' => $faker->randomElement($samplePosts) . ' ' . $faker->sentence(rand(5, 15))
            ]);
        }
    }
}