<?php

namespace App\Tests\Controller;

use App\Controller\GenericPageController;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

/**
 * Tests for the GenericPageController class.
 */
class GenericPageControllerTest extends WebTestCase
{
    /**
     * Test for the index() method in the GenericPageController.
     */
    public function testIndex(): void
    {
        // Create a new client to browse the application
        $client = static::createClient();

        // Request the homepage
        $client->request('GET', '/');

        // Assert that the response status code is 200 (HTTP_OK)
        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());
    }
}