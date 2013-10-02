	<?php if(!Config::item('usedist')){ ?>
	<!-- build:js(public) js/main.js -->
	<script src="<?=Config::item('publicSrc')?>js/vendor/jquery/jquery-1.10.1.js"></script>
	<script src="<?=Config::item('publicSrc')?>js/vendor/lodash/lodash.compat.js"></script>
	<script src="<?=Config::item('publicSrc')?>js/vendor/mbone/mbone-1.0.0.js"></script>
	<script src="<?=Config::item('publicSrc')?>js/vendor/gaTrackers/gaTrackers.js"></script>
	<script src="<?=Config::item('publicSrc')?>js/main.js"></script>
	<!-- endbuild -->
	<?php } else { ?>
	<script src="<?=Config::item('publicDist')?>js/main.js"></script>
	<?php } ?>
</body>
</html>