<?php

require_once "vendor/autoload.php";

foreach (['extensions', 'controllers'] as $folder) {

    foreach (scandir(__DIR__ . DIRECTORY_SEPARATOR . $folder) as $f) {
        if  (!($f === '.' || $f === '..')) {
            require_once __DIR__ . DIRECTORY_SEPARATOR . $folder . DIRECTORY_SEPARATOR . $f;
        }
    }
}

// TWIG initialisation
MainExtension::twigInit(new Twig_Environment(new Twig_Loader_Filesystem(__DIR__ . DIRECTORY_SEPARATOR . 'templates')/*, [
    'cache' => __DIR__ .  DIRECTORY_SEPARATOR . 'cache' . DIRECTORY_SEPARATOR . 'twig',
]*/));
