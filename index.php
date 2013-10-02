<?php

define("DS", DIRECTORY_SEPARATOR);
define("EXT", ".php");
define("CRLF", PHP_EOL);

define("J_START", microtime(true));
define("J_PATH", realpath(__DIR__) . DS);
define("J_APPPATH", realpath(__DIR__)  . DS . "app" . DS);
define("J_MANAGERPATH", realpath(__DIR__)  . DS . "manager" . DS);
define("J_SYSTEMPATH", realpath(__DIR__)  . DS . "system" . DS);
define("J_LOCAL_ENV", "local");
define("J_PREVIEW_ENV", "preview");

require J_SYSTEMPATH . "core" . DS . "core" . EXT;

?>