<!doctype html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<base href="<?=Url::root()?>" />

	<title>Joy Seed</title>

	<!-- Facebook OpenGraph Tags -->
	<meta property="og:title" content="" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="<?php echo URL::full(); ?>" />
	<meta property="og:image" content="<?php echo Url::root() ?>img/thumb-facebook.png" />
	<meta property="og:description" content="" />
	<!-- -->

	<?php if(!Config::item('usedist')){ ?>
	<link rel="stylesheet" href="css/main.css">
	<?php } else { ?>
	<link rel="stylesheet" href="<?=Config::item('publicDist')?>css/main.css">
	<?php } ?>
</head>
<body>