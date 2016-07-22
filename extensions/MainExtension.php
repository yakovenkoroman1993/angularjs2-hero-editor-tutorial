<?php

class MainExtension
{
    /** @var  Twig_Environment */
    protected static $twig;

    /**
     * @param Twig_Environment $twig
     */
    public static function twigInit($twig){

        $protocol = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http') . '://';

        $twig->addFunction(new Twig_SimpleFunction('url', function($src) use($protocol) {
            return $protocol . $_SERVER['HTTP_HOST'] . '/' . $src;
        }));

        self::$twig = $twig;
    }
}