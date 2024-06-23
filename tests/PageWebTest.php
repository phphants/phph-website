<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class PageWebTest extends WebTestCase
{
    public function testHomepageReturns200(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/');

        $this->assertResponseIsSuccessful();
    }

    public function testHomepageContainsMeetupLink(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/');

        $this->assertSelectorTextContains('html a.meetup-link', 'I want to attend', "Checking meetup link exists");
//        $this->assertEquals('/', $this->findLink("Expected Link Text")->getAttribute('href'));

    }
}
