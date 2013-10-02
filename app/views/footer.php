	<?php if(!Config::item('usedist')){ ?>
	<!-- build:js(public) js/main.js -->
	<script src="js/vendor/jquery/jquery-1.10.1.js"></script>
	<script src="js/vendor/lodash/lodash.compat.js"></script>
	<script src="js/vendor/mbone/mbone-1.0.0.js"></script>
	<script src="js/vendor/gaTrackers/gaTrackers.js"></script>
	<script src="js/main.js"></script>
	<!-- endbuild -->
	<?php } else { ?>
	<script src="<?=Config::item('publicDist')?>js/main.js"></script>
	<?php } ?>
</body>
</html>