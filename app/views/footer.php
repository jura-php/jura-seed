	<script type="text/template" id="template-logo">
		<h1 class="logo"><%=data.name%></h1>
	</script>

	<script type="text/template" id="template-modal">
		<div class="modal" id="modal-bla">
			<div class="modal-overlay"></div>
			<div class="modal-content">
				<a class="modal-close" href="#">Fechar</a>

				<h1><%=title%></h1>
				<p>Lorem ipsum</p>
			</div>
		</div>

	</script>

	<?php if(!Config::item('usedist')){ ?>
	<!-- build:js(public) js/main.js -->
	<script src="js/vendor/jquery/jquery-1.10.1.js"></script>
	<script src="js/vendor/lodash/lodash.compat.js"></script>
	<script src="js/vendor/mbone/mbone-1.0.0.js"></script>
	<script src="js/vendor/gaTrackers/gaTrackers.js"></script>
	<script src="js/modules/modal.js"></script>
	<script src="js/main.js"></script>

	<!-- endbuild -->
	<?php } else { ?>
	<script src="<?=Config::item('publicDist')?>js/main.js"></script>
	<?php } ?>
</body>
</html>