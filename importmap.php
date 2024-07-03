<?php

/**
 * Returns the importmap for this application.
 *
 * - "path" is a path inside the asset mapper system. Use the
 *     "debug:asset-map" command to see the full list of paths.
 *
 * - "entrypoint" (JavaScript only) set to true for any module that will
 *     be used as an "entrypoint" (and passed to the importmap() Twig function).
 *
 * The "importmap:require" command can be used to add new entries to this file.
 */
return [
    'app' => [
        'path' => './assets/app.js',
        'entrypoint' => true,
    ],
    'typography' => [
        'version' => '0.16.24',
    ],
    'object-assign' => [
        'version' => '4.1.1',
    ],
    'compass-vertical-rhythm' => [
        'version' => '1.4.5',
    ],
    'modularscale' => [
        'version' => '1.0.2',
    ],
    'gray-percentage' => [
        'version' => '2.0.0',
    ],
    'lodash/set' => [
        'version' => '4.17.21',
    ],
    'lodash/forEach' => [
        'version' => '4.17.21',
    ],
    'lodash/isNumber' => [
        'version' => '4.17.21',
    ],
    'lodash/isString' => [
        'version' => '4.17.21',
    ],
    'lodash/isFunction' => [
        'version' => '4.17.21',
    ],
    'lodash/isArray' => [
        'version' => '4.17.21',
    ],
    'lodash/merge' => [
        'version' => '4.17.21',
    ],
    'lodash/reduce' => [
        'version' => '4.17.21',
    ],
    'typography-normalize' => [
        'version' => '0.16.19',
    ],
    'decamelize' => [
        'version' => '1.2.0',
    ],
    'lodash/isObject' => [
        'version' => '4.17.21',
    ],
    'convert-css-length' => [
        'version' => '1.0.2',
    ],
    'parse-unit' => [
        'version' => '1.0.1',
    ],
    'lodash.isnumber' => [
        'version' => '3.0.3',
    ],
];
