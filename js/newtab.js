//author: Jimmy Chion, 2016
//license: Creative Commons SA-3.0

var sp = {
	//-- used openFrameworks to sort the patterns by luminance
	//-- tried using python, but PIL can't open interlaced pngs.
	/* for reference: here's the distribution of luminance (0-255)
	[0, 0, 2, 3, 3, 4, 5, 5, 6, 6, 7, 8, 10, 10, 10, 11, 11, 12, 13, 13, 14, 15, 16, 16, 17, 17, 18, 18, 18, 19, 19, 20, 20, 20, 20, 20, 21, 22, 22, 23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 26, 26, 27, 27, 27, 28, 28, 31, 31, 32, 33, 33, 34, 34, 35, 36, 36, 36, 36, 37, 37, 37, 38, 38, 39, 41, 42, 42, 43, 43, 46, 46, 47, 47, 50, 52, 52, 52, 53, 53, 54, 54, 55, 57, 57, 57, 58, 58, 60, 61, 64, 65, 68, 72, 75, 80, 100, 125, 134, 147, 161, 167, 179, 183, 184, 187, 189, 189, 191, 193, 197, 198, 200, 201, 201, 202, 204, 205, 205, 210, 210, 211, 211, 213, 213, 214, 214, 214, 215, 216, 216, 217, 218, 218, 218, 219, 219, 219, 219, 220, 220, 220, 221, 221, 222, 222, 222, 222, 223, 223, 223, 223, 223, 224, 224, 224, 224, 225, 225, 226, 226, 226, 227, 227, 227, 227, 227, 227, 227, 227, 227, 227, 228, 228, 228, 228, 228, 229, 229, 229, 229, 229, 229, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 231, 231, 231, 231, 231, 231, 231, 231, 231, 232, 232, 232, 232, 232, 232, 232, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 234, 234, 234, 234, 234, 234, 234, 234, 234, 235, 235, 235, 235, 235, 235, 235, 235, 236, 236, 236, 236, 236, 236, 236, 236, 236, 236, 236, 236, 236, 237, 237, 237, 237, 237, 237, 237, 237, 237, 237, 237, 237, 237, 237, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 239, 239, 240, 240, 240, 240, 240, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 244, 244, 244, 244, 244, 244, 244, 244, 244, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 246, 246, 246, 246, 246, 246, 246, 246, 246, 247, 247, 247, 247, 247, 247, 248, 248, 248, 248, 249, 249, 249, 249, 249, 249, 249, 249, 249, 249, 250, 250, 250, 250, 250, 250, 250, 250, 250, 251, 251, 251, 251, 251, 252, 252, 253, 254]
	*/
	patterns: ['square_bg.png', 'twinkle_twinkle.png', 'subtle_carbon.png', 'black_twill.png', 'simple_dashed.png', 'soft_kill.png', 'argyle.png', 'slash_it.png', 'checkered_pattern.png', 'dark_dotted2.png', 'dark_exa.png', 'dark_mosaic.png', 'black_mamba.png', 'nami.png', 'rebel.png', 'blackorchid.png', 'moulin.png', 'burried.png', 'black_scales.png', 'dark_stripes.png', 'asfalt.png', 'dark_leather.png', 'fake_brick.png', 'pw_maze_black.png', 'dvsup.png', 'gun_metal.png', 'padded.png', 'skewed_print.png', 'zwartevilt.png', 'hixs_pattern_evolution.png', 'real_cf.png', 'dark_wood.png', 'darth_stripe.png', 'dirty_old_shirt.png', 'outlets.png', 'woven.png', 'diagmonds.png', 'black_paper.png', 'stressed_linen.png', 'binding_dark.png', 'tasky_pattern.png', 'black_denim.png', 'carbon_fibre_big.png', 'crissXcross.png', 'assault.png', 'blackmamba.png', 'noisy_net.png', 'broken_noise.png', 'dark_dotted.png', 'robots.png', 'triangles.png', 'txture.png', 'dark_Tire.png', 'micro_carbon.png', 'type.png', 'black_lozenge.png', 'office.png', 'black-Linen.png', 'pinstriped_suit.png', 'use_your_illusion.png', 'black_thread.png', 'dark_wall.png', 'dark_brick_wall.png', 'wood_1.png', 'tactile_noise.png', 'black_linen_v2.png', 'bo_play_pattern.png', 'cartographer.png', 'flowers.png', 'carbon_fibre.png', 'dark_geometric.png', 'diagonales_decalees.png', 'dark_matter.png', 'hexabump.png', 'inflicted.png', 'zigzag.png', 'carbon_fibre_v2.png', 'navy_blue.png', 'squares.png', 'vertical_cloth.png', 'dark_circles.png', 'escheresque_ste.png', 'classy_fabric.png', 'px_by_Gre3g.png', 'rubber_grip.png', 'congruent_outline.png', 'debut_dark.png', 'footer_lodyas.png', 'concrete_wall.png', 'starring.png', 'dark_embroidery.png', 'darkdenim3.png', 'irongrip.png', 'dark_fish_skin.png', 'low_contrast_linen.png', 'tex2res4.png', 'crossed_stripes.png', 'wild_oliva.png', 'green-fibers.png', 'gray_sand.png', 'always_grey.png', 'denim.png', 'stardust.png', 'random_grey_variations.png', 'pool_table.png', 'tweed.png', 'grey_wash_wall.png', 'brushed_alu_dark.png', 'mochaGrunge.png', 'otis_redding.png', 'mirrored_squares.png', 'green_cup.png', 'restaurant.png', 'triangular.png', 'absurdidad.png', 'green_gobbler.png', 'knitted-netting.png', 'nasty_fabric.png', 'little_pluses.png', 'wild_flowers.png', 'purty_wood.png', 'white_carbonfiber.png', 'mooning.png', 'felt.png', 'green_dust_scratch.png', 'food.png', 'retro_intro.png', 'cardboard_1.png', 'solid.png', 'bedge_grunge.png', 'squared_metal.png', 'tex2res1.png', 'wide_rectangles.png', 'light_honeycomb.png', 'retina_wood.png', 'sandpaper.png', 'vichy.png', 'wood_pattern.png', '60degree_gray.png', 'binding_light.png', 'norwegian_rose.png', 'old_moon.png', 'cracks_1.png', 'grid.png', 'shattered.png', 'cardboard.png', 'cardboard_flat.png', 'cheap_diagonal_fabric.png', 'honey_im_subtle.png', 'redox_02.png', 'subtle_orange_emboss.png', 'textured_paper.png', 'paper_2.png', 'white_sand.png', 'light_alu.png', 'notebook.png', 'school.png', 'strange_bullseyes.png', 'flowertrail.png', 'husk.png', 'polyester_lite.png', 'seamless_paper_texture.png', 'tex2res2.png', 'kindajean.png', 'wavecut.png', 'whitey.png', 'wov.png', '45degreee_fabric.png', 'cork_1.png', 'batthern.png', 'climpek.png', 'farmer.png', 'diagonal_waves.png', 'escheresque.png', 'grunge_wall.png', 'lyonnette.png', 'paper_1.png', 'smooth_wall.png', 'subtle_surface.png', 'tex2res5.png', 'ticks.png', 'tileable_wood_texture.png', 'diagonal-noise.png', 'first_aid_kit.png', 'noisy.png', 'pink_rice.png', 'texturetastic_gray.png', 'bgnoise_lg.png', 'concrete_wall_3.png', 'crosses.png', 'knitting250px.png', 'kuji.png', 'nistri.png', 'beige_paper.png', 'billie_holiday.png', 'brushed.png', 'congruent_pentagon.png', 'giftly.png', 'grey_sandbag.png', 'lghtmesh.png', 'pixel_weave.png', 'rough_diagonal.png', 'soft_wallpaper.png', 'textured_stripes.png', 'cloth_alike.png', 'perforated_white_leather.png', 'ravenna.png', 'soft_circle_scales.png', 'soft_pad.png', 'sprinkles.png', 'subtle_white_mini_waves.png', 'vaio_hard_edge.png', 'white_leather.png', 'egg_shell.png', 'light_grey_floral_motif.png', 'light_toast.png', 'old_map.png', 'squairy_light.png', 'subtle_stripes.png', 'white_carbon.png', 'blu_stripes.png', 'bright_squares.png', 'brushed_alu.png', 'creampaper.png', 'fabric_plaid.png', 'hoffman.png', 'ignasi_pattern_s.png', 'leather_1.png', 'little_triangles.png', 'natural_paper.png', 'roughcloth.png', 'white_wall.png', 'az_subtle.png', 'embossed_paper.png', 'fabric_1.png', 'rip_jobs.png', 'sativa.png', 'shinecaro.png', 'shinedotted.png', 'tree_bark.png', 'white_plaster.png', 'brickwall.png', 'diamond_upholstery.png', 'extra_clean_paper.png', 'fake_luxury.png', 'noise_lines.png', 'noisy_grid.png', 'ricepaper_v3.png', 'subtle_zebra_3d.png', 'candyhole.png', 'chruch.png', 'concrete_wall_2.png', 'cross_scratches.png', 'diamonds.png', 'elegant_grid.png', 'foil.png', 'light_noise_diagonal.png', 'pineapplecut.png', 'project_papper.png', 'small_steps.png', 'triangles_pattern.png', 'weave.png', 'circles.png', 'concrete_seamless.png', 'double_lined.png', 'exclusive_paper.png', 'graphy.png', 'gray_jean.png', 'greyfloral.png', 'light_checkered_tiles.png', 'ricepaper.png', 'shl.png', 'sos.png', 'white_bed_sheet.png', 'white_texture.png', 'xv.png', 'arab_tile.png', 'crisp_paper_ruffles.png', 'gold_scale.png', 'gradient_squares.png', 'littleknobs.png', 'merely_cubed.png', 'old_mathematics.png', 'paper.png', 'paper_3.png', 'plaid.png', 'psychedelic_pattern.png', 'pw_maze_white.png', 'scribble_light.png', 'skulls.png', 'stitched_wool.png', 'white_tiles.png', 'witewall_3.png', 'tapestry_pattern.png', 'tex2res3.png', 'ecailles.png', 'halftone.png', 'p4.png', 'satinweave.png', 'white_wave.png', 'fresh_snow.png', 'handmadepaper.png', 'large_leather.png', 'noise_pattern_with_crosslines.png', 'paisley.png', 'paven.png', 'small_tiles.png', 'subtle_grunge.png', 'vintage_speckles.png', 'washi.png', 'contemporary_china.png', 'contemporary_china_2.png', 'eight_horns.png', 'furley_bg.png', 'hexellence.png', 'old_wall.png', 'p1.png', 'p2.png', 'pw_pattern.png', 'ricepaper2.png', 'stacked_circles.png', 'subtle_white_feathers.png', 'swirl_pattern.png', 'upfeathers.png', 'agsquare.png', 'back_pattern.png', 'cubes.png', 'cutcube.png', 'diagonal_striped_brick.png', 'dust.png', 'fancy_deboss.png', 'p5.png', 'paper_fibers.png', 'polaroid.png', 'quilt.png', 'redox_01.png', 'struckaxiom.png', 'stucco.png', 'subtle_freckles.png', 'corrugation.png', 'light_grey.png', 'logo_x_pattern.png', 'new_year_background.png', 'polonez_car.png', 'rockywall.png', 'silver_scales.png', 'small-crackle-bright.png', 'white_brick_wall.png', 'confectionary.png', 'dimension.png', 'grid_noise.png', 'lil_fiber.png', 'nice_snow.png', 'ps_neutral.png', 'reticular_tissue.png', 'subtlenet2.png', 'symphony.png', 'wall4.png', 'white_wall_hash.png', 'debut_light.png', 'fabric_of_squares_gray.png', 'frenchstucco.png', 'linen.png', 'sneaker_mesh_fabric.png', 'straws.png', 'striped_lens.png', 'tiny_grid.png', 'white_wall2.png', 'elastoplast.png', 'lined_paper.png', 'p6.png', 'pinstripe.png', 'restaurant_icons.png', 'white_paperboard.png', 'gplaypattern.png', 'pyramid.png', 'snow.png', 'worn_dots.png', 'clean_textile.png', 'geometry.png', 'geometry2.png', 'greyzz.png', 'grilled.png', 'groovepaper.png', 'linedpaper.png', 'photography.png', 'skelatal_weave.png', 'skin_side_up.png', 'arches.png', 'connect.png', 'cream_dust.png', 'cream_pixels.png', 'crossword.png', 'daimond_eyes.png', 'grey.png', 'wet_snow.png', 'whitediamond.png', 'blizzard.png', 'foggy_birds.png', 'ice_age.png', 'light_wool.png', 'lightpaperfibers.png', 'brillant.png', 'subtle_dots.png', 'swirl.png', 'gridme.png'],
	index: 0,
	patternName: "",
	patternUrl: "",
	shade: "", 
	tint: "", 
 	isPaneUp: false,

 	//-----------------------------------------------

 	init: function() {
 		//-- set some vars
 		var temp_index = 55;
 		sp.index = Math.floor(Math.random() * sp.patterns.length);
 		sp.patternName = sp.patterns[sp.index];
 		sp.patternUrl = 'https://www.toptal.com/designers/subtlepatterns/patterns/' + sp.patternName;
 		sp.shade = sp.getShade();
 		sp.tint = sp.getTint();


 		sp.displayImages(); //-- bind animation on load
		document.getElementById('invis').getElementsByTagName('img')[0].setAttribute('src', sp.patternUrl);

	    sp.setColorsOfWindow();
		if(sp.index > 160) sp.loadDark(); //-- 140 determined with ordering via python
		else sp.loadLight();

		//-- actions to open pane
		document.getElementById('moreInfoBtn').addEventListener('click', function(){
			sp.setColorsOfInfo();
			sp.toggleInfoPane();
			document.getElementById('patternName').innerHTML = ('<a style=\"color:' + sp.shade +'\" href=\"' + sp.patternUrl + '\"">' + sp.patternName.replace(".png", "") + '<\a>');
		});

		//-- actions to close pane
		document.getElementById('closeX').addEventListener('click', function() {
			sp.hideInfoPane();
		});

		document.getElementById('clockEnableBtn').addEventListener('click', function() {
			sp.toggleClock();
		});

	    //-- start the clock
	    sp.refreshHands();
	    sp.startClock();


		

 	},

	//-----------------------------------------------
	displayImages: function() {
		document.getElementById('invis').getElementsByTagName('img')[0].addEventListener('load', function() {
		    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(' + sp.patternUrl +')'; //-- set the background
			document.getElementsByClassName('window')[0].style.opacity = 1.0;
			document.getElementsByTagName('body')[0].style.opacity = 1.0;

		});
	},

	//-----------------------------------------------
	setColorsOfInfo: function() {
		document.getElementById('infoPane').style.backgroundColor = sp.tint;
		document.getElementById('infoPane').style.boxShadow = ('2px 2px 10px ' + sp.shade);
		document.getElementById('infoPane').style.color = sp.shade;
		document.getElementById('clockEnableBtnOverlay').style.backgroundColor = sp.shade;
	},



	//-----------------------------------------------
	toggleInfoPane: function() {
		if(sp.isPaneUp) {
			document.getElementById('infoPane').style.opacity = 0.0;
			document.getElementById('infoPane').style.display = 'none';

		} else {
			document.getElementById('infoPane').getElementsByTagName('img')[0].setAttribute('src', "img/close-dark.png");
			document.getElementById('infoPane').className += 'animated fadeInDown';
			document.getElementById('infoPane').style.display = 'block';
			document.getElementById('infoPane').style.opacity = 1.0;


		}
		sp.isPaneUp = sp.isPaneUp ? false : true;
	},

	//-----------------------------------------------
	hideInfoPane: function() {
		sp.isPaneUp = true;
		sp.toggleInfoPane();
	},

	//-----------------------------------------------
	setColorsOfWindow: function() {
	    document.getElementById('moreInfoBtn').style.backgroundColor = sp.shade; //-- set color of info button
	    document.getElementById('moreInfoBtn').style.color = sp.tint; //-- set color of the info text
	},

	//-----------------------------------------------
	getLuminance: function() {
		//-- not uniform distribution, approximated with lines
		if(sp.index < 90) {
			return Math.floor(61*(sp.index-1)/89);
		} else if (sp.index >113) {
			return Math.floor((sp.index+954)/5);
		} else {
			return Math.floor((152*sp.index-12277)/23);
		}
	},

	//-----------------------------------------------
	//-- returns an approximate shade (a color that's darker) of the average of the background
	getShade: function() {
		var lum = sp.getLuminance();
		if(sp.index < 50) {
			return '#000000';
		}
		for (var i = 0.6; i <= 0.9; i+=0.1) {
			if (lum*i > 0) {
				lum = Math.floor(lum * i);
				break;
			} else if (i == 1.0) {
				lum = 0;
			}
		}
		return '#' + lum.toString(16) + lum.toString(16) + lum.toString(16);
	},

	//-----------------------------------------------
	//-- returns an approximate tint (a color that's lighter) of the average of the background
	getTint: function()  {
		var lum = sp.getLuminance();
		if(sp.index < 50) return '#dddddd';
		if(lum > 150) return '#ffffff';
		for (var i = 2.0; i >= 1.0; i-=0.2) {
			if (lum * i < 255) {
				lum = Math.floor(lum * i);
				break;
			} else if (i == 1.0) {
				lum = 256;
			}
		}
		return '#' + lum.toString(16) + lum.toString(16) + lum.toString(16);
	},
	//-----------------------------------------------
	//-- if needed, changes the assests to the Dark theme
	loadDark: function() {
		document.getElementById('clock-min').getElementsByTagName('img')[0].setAttribute('srcset', 'img/clock-minhand-dark@2x.png 2x');
		document.getElementById('clock-min').getElementsByTagName('img')[0].setAttribute('src', 'img/clock-minhand-dark.png');
		document.getElementById('clock-hour').getElementsByTagName('img')[0].setAttribute('srcset', 'img/clock-hourhand-dark@2x.png 2x');
		document.getElementById('clock-hour').getElementsByTagName('img')[0].setAttribute('src', 'img/clock-hourhand-dark.png');
		document.getElementById('clock-outer').getElementsByTagName('img')[0].setAttribute('srcset', 'img/clock-outer-dark@2x.png 2x');
		document.getElementById('clock-outer').getElementsByTagName('img')[0].setAttribute('src', 'img/clock-outer-dark.png');
	},
	loadLight: function() {
		document.getElementById('clock-min').getElementsByTagName('img')[0].setAttribute('srcset', 'img/clock-minhand-light@2x.png 2x');
		document.getElementById('clock-min').getElementsByTagName('img')[0].setAttribute('src', 'img/clock-minhand-light.png');
		document.getElementById('clock-hour').getElementsByTagName('img')[0].setAttribute('srcset', 'img/clock-hourhand-light@2x.png 2x');
		document.getElementById('clock-hour').getElementsByTagName('img')[0].setAttribute('src', 'img/clock-hourhand-light.png');
		document.getElementById('clock-outer').getElementsByTagName('img')[0].setAttribute('srcset', 'img/clock-outer-light@2x.png 2x');
		document.getElementById('clock-outer').getElementsByTagName('img')[0].setAttribute('src', 'img/clock-outer-light.png');
	},

	//-----------------------------------------------
	//-- Set interval timeout to update the hands in the future
	startClock: function() {
		chrome.alarms.create("minuteAlarm", {when: Date.now(), periodInMinutes: 1} );
		chrome.alarms.onAlarm.addListener(sp.refreshHands);
	},

	//-----------------------------------------------
	//-- Check the time and display the clock
	refreshHands: function() {
		var now = new Date();
		if (sp.gmtOffset != null) {
			// Use GMT + gmtOffset
			var offsetNow = new Date(now.valueOf() + (sp.gmtOffset * 1000 * 60 * 60));
			sp.renderHands( offsetNow.getUTCHours(), offsetNow.getUTCMinutes(), offsetNow.getUTCSeconds() );
		}
		else {
			// Use local time
			sp.renderHands( now.getHours(),now.getMinutes(),now.getSeconds() );
		}
	},
	//-----------------------------------------------
	//-- rotate the hands' elements accordingly
	renderHands: function(hour, min, sec) {
		var hourAngle = (hour%12) * 30 + (min/2); //= h/12*360deg + m/60*30deg
		var minAngle = min*6 + sec/12; //= m/60*360deg + s/60*5deg
		document.getElementById('clock-min').style.transform = ('rotate(' + minAngle + 'deg)');
		document.getElementById('clock-hour').style.transform = ('rotate(' + hourAngle + 'deg)');
	},

	//-----------------------------------------------
	//-- toggles show/hide clock and stores it in localStorage
	toggleClock: function() {
		var setting = localStorage["clock_enable"];
		setting = (setting == 'on') ? 'off' : 'on'; 
		
		localStorage["clock_enable"] = setting;

		if(setting == 'on') this.showClock();
		else this.hideClock();

	},
	//-----------------------------------------------
	//-- shows the clock and adjusts button
	showClock: function() {
		document.getElementById('clock-min').style.display = '';
		document.getElementById('clock-hour').style.display = '';
		document.getElementById('clock-outer').style.display = '';
		document.getElementById('clock-outer').className += 'animated fadeInDown';
		var paddingL = getComputedStyle(document.getElementsByClassName('info')[0])['padding-left'];
		paddingL = parseInt(paddingL.replace('px',''));
		paddingL = (paddingL+57).toString().concat('px');
		document.getElementById('clockEnableBtnOverlay').style.left = paddingL;
		document.getElementById('clockEnableBtnOverlay').style.width = '30px';

	},
	//-----------------------------------------------
	//-- hides the clock and adjusts button
	hideClock: function() {
		document.getElementById('clock-min').style.display = 'none';
		document.getElementById('clock-hour').style.display = 'none';
		document.getElementById('clock-outer').style.display = 'none';
		var paddingL = getComputedStyle(document.getElementsByClassName('info')[0])['padding-left'];
		paddingL = parseInt(paddingL.replace('px',''));
		paddingL = (paddingL+85).toString().concat('px');
		document.getElementById('clockEnableBtnOverlay').style.left = paddingL;
		document.getElementById('clockEnableBtnOverlay').style.width = '34px';
		
	},

	//-----------------------------------------------
	//-- Restores options' states to saved value from localStorage.
	restore_options: function() {
	  var clock_enable = localStorage["clock_enable"];
	  if (!clock_enable) { //-- if null
	    return;
	  }
	  //-- set clock visibility to whatever is in localStorage.
	  if(clock_enable == 'on') this.showClock();
	  else this.hideClock();
	}

};


document.addEventListener("DOMContentLoaded", function(event) { 
	sp.init();
	sp.restore_options();
});
