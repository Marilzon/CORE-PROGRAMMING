<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit27dd60b39ad2ff515b2ed85975b79697
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stack\\Poo\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stack\\Poo\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit27dd60b39ad2ff515b2ed85975b79697::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit27dd60b39ad2ff515b2ed85975b79697::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit27dd60b39ad2ff515b2ed85975b79697::$classMap;

        }, null, ClassLoader::class);
    }
}
