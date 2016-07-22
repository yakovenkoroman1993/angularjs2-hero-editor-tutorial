<?php

class HomeController extends MainExtension
{
    /**
     * @return string
     */
    public static function indexAction()
    {
        return self::$twig->render('index.html.twig');
    }
}