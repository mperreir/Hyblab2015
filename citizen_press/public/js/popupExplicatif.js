jQuery(function ($) {
	var popupExplication = {
		container: null,
		init: function () {
			$("#popupIntro").click(function (e) {
				e.preventDefault();	

				$("#popupExplication-modal-contentIntro").modal({
					overlayId: 'popupExplication-overlayIntro',
					containerId: 'popupExplication-modal-containerIntro',
					closeHTML: null,
					minHeight: 80,
					opacity: 65, 
					position: ['0',],
					overlayClose: true,
					onOpen: popupExplication.openIntro,
					onClose: popupExplication.close
				});
			});
				$("#popup3").click(function (e) {
				e.preventDefault();	

				$("#popupExplication-modal-content3").modal({
					overlayId: 'popupExplication-overlay3',
					containerId: 'popupExplication-modal-container3',
					closeHTML: null,
					minHeight: 80,
					opacity: 65, 
					position: ['0',],
					overlayClose: true,
					onOpen: popupExplication.open3,
					onClose: popupExplication.close
				});
			});
				$("#popup2").click(function (e) {
				e.preventDefault();	

				$("#popupExplication-modal-content2").modal({
					overlayId: 'popupExplication-overlay2',
					containerId: 'popupExplication-modal-container2',
					closeHTML: null,
					minHeight: 80,
					opacity: 65, 
					position: ['0',],
					overlayClose: true,
					onOpen: popupExplication.open2,
					onClose: popupExplication.close
				});
			});
			$("#popup1").click(function (e) {
				e.preventDefault();	

				$("#popupExplication-modal-content1").modal({
					overlayId: 'popupExplication-overlay1',
					containerId: 'popupExplication-modal-container1',
					closeHTML: null,
					minHeight: 80,
					opacity: 65, 
					position: ['0',],
					overlayClose: true,
					onOpen: popupExplication.open1,
					onClose: popupExplication.close
				});
			});
			$("#popup4").click(function (e) {
				e.preventDefault();	

				$("#popupExplication-modal-content4").modal({
					overlayId: 'popupExplication-overlay4',
					containerId: 'popupExplication-modal-container4',
					closeHTML: null,
					minHeight: 80,
					opacity: 65, 
					position: ['0',],
					overlayClose: true,
					onOpen: popupExplication.open4,
					onClose: popupExplication.close
				});
			});
		},
		openIntro: function (d) {
			var self = this;
			self.container = d.container[0];
			$("#popupExplication-modal-contentIntro", self.container).show();
			d.container.slideDown('fast', function () {
				setTimeout(function () {
					var h = $("#popupExplication-modal-dataIntro", self.container).height()
						+ 20; // padding
					d.container.animate(
						{height: h}, 
						500,
						function () {
							$("#closePopupIntro", self.container).show();
							$("#popupExplication-modal-dataIntro", self.container).show();
						}
					);
				}, 100);
			});
		},
		open4: function (d) {
			var self = this;
			self.container = d.container[0];
			$("#popupExplication-modal-content4", self.container).show();
			d.container.slideDown('fast', function () {
				setTimeout(function () {
					var h = $("#popupExplication-modal-data4", self.container).height()
						+ 20; // padding
					d.container.animate(
						{height: h}, 
						500,
						function () {
							$("#closePopup4", self.container).show();
							$("#popupExplication-modal-data4", self.container).show();
						}
					);
				}, 0);
			});
		},
		open3: function (d) {
			var self = this;
			self.container = d.container[0];
			$("#popupExplication-modal-content3", self.container).show();
			d.container.slideDown('fast', function () {
				setTimeout(function () {
					var h = $("#popupExplication-modal-data3", self.container).height()
						+ 20; // padding
					d.container.animate(
						{height: h}, 
						500,
						function () {
							$("#closePopup3", self.container).show();
							$("#popupExplication-modal-data3", self.container).show();
						}
					);
				}, 0);
			});
		},
		open2: function (d) {
			var self = this;
			self.container = d.container[0];
			$("#popupExplication-modal-content2", self.container).show();
			d.container.slideDown('fast', function () {
				setTimeout(function () {
					var h = $("#popupExplication-modal-data2", self.container).height()
						+ 20; // padding
					d.container.animate(
						{height: h}, 
						200,
						function () {
							$("#closePopup2", self.container).show();
							$("#popupExplication-modal-data2", self.container).show();
						}
					);
				}, 0);
			});
		},
		open1: function (d) {
			var self = this;
			self.container = d.container[0];
			$("#popupExplication-modal-content1", self.container).show();
			d.container.slideDown('fast', function () {
				setTimeout(function () {
					var h = $("#popupExplication-modal-data1", self.container).height()
						+ 20; // padding
					d.container.animate(
						{height: h}, 
						500,
						function () {
							$("#closePopup1", self.container).show();
							$("#popupExplication-modal-data1", self.container).show();
						}
					);
				}, 0);
			});
		},
		close: function (d) {
			var self = this; // this = SimpleModal object
			d.container.animate(
				{top:"-" + (d.container.height() + 20)},
				500,
				function () {
					self.close(); // or $.modal.close();
				}
			);
		}
	};

	popupExplication.init();

});