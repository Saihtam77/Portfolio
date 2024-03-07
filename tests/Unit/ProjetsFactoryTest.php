<?php

namespace Tests\Unit;
use App\Models\Projets;
use PHPUnit\Framework\TestCase;

class ProjetsFactoryTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_example(): void
    {
        $projet = Projets::factory()->create();
        $this->assertTrue(true);
    }
}
