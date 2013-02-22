//author: IDEO > Jimmy Chion, 2013
//license: Creative Commons SA-3.0

var sp = {
	//-- used openFrameworks to sort the patterns by luminance
	//-- tried using python, but PIL can't open interlaced pngs.
	/* for reference: here's the distribution of luminance (0-255)
	[0, 0, 2, 3, 4, 5, 6, 8, 10, 10, 10, 11, 12, 13, 13, 14, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 20, 20, 20, 21, 22, 22, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 26, 26, 27, 27, 27, 28, 28, 31, 31, 32, 33, 33, 34, 34, 35, 36, 36, 36, 36, 37, 37, 37, 38, 38, 39, 41, 42, 42, 43, 43, 46, 46, 47, 47, 50, 52, 53, 53, 54, 55, 57, 57, 57, 58, 58, 60, 61, 64, 65, 72, 75, 125, 147, 161, 187, 189, 189, 191, 197, 198, 201, 201, 204, 205, 205, 210, 211, 211, 213, 213, 214, 214, 215, 216, 218, 218, 218, 219, 219, 219, 220, 220, 221, 221, 222, 222, 223, 223, 223, 223, 224, 224, 224, 225, 225, 226, 226, 226, 227, 227, 227, 227, 227, 227, 227, 227, 227, 228, 228, 228, 228, 229, 229, 229, 229, 229, 230, 230, 230, 230, 230, 230, 230, 231, 231, 231, 231, 231, 231, 232, 232, 232, 232, 232, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 234, 234, 234, 234, 234, 234, 234, 235, 235, 235, 235, 235, 235, 236, 236, 236, 236, 236, 236, 236, 236, 236, 236, 236, 236, 237, 237, 237, 237, 237, 237, 237, 237, 237, 237, 237, 237, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 239, 239, 240, 240, 240, 241, 241, 241, 241, 241, 241, 241, 241, 242, 242, 242, 242, 242, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 244, 244, 244, 244, 244, 244, 245, 245, 245, 245, 245, 246, 246, 246, 246, 246, 246, 246, 247, 247, 247, 247, 248, 248, 248, 248, 249, 249, 249, 249, 249, 249, 250, 250, 250, 250, 250, 250, 251, 251, 251, 251, 251, 252, 252, 253, 254, 254]
	*/
	patterns: ['square_bg.png', 'twinkle_twinkle.png', 'subtle_carbon.png', 'black_twill.png', 'soft_kill.png', 'argyle.png', 'checkered_pattern.png', 'dark_mosaic.png', 'black_mamba.png', 'nami.png', 'rebel.png', 'blackorchid.png', 'burried.png', 'black_scales.png', 'dark_stripes.png', 'asfalt.png', 'dark_leather.png', 'fake_brick.png', 'pw_maze_black.png', 'dvsup.png', 'gun_metal.png', 'padded.png', 'skewed_print.png', 'hixs_pattern_evolution.png', 'real_cf.png', 'dark_wood.png', 'darth_stripe.png', 'dirty_old_shirt.png', 'outlets.png', 'woven.png', 'diagmonds.png', 'black_paper.png', 'stressed_linen.png', 'tasky_pattern.png', 'black_denim.png', 'carbon_fibre_big.png', 'crissXcross.png', 'assault.png', 'blackmamba.png', 'noisy_net.png', 'broken_noise.png', 'dark_dotted.png', 'robots.png', 'triangles.png', 'txture.png', 'dark_Tire.png', 'micro_carbon.png', 'type.png', 'black_lozenge.png', 'office.png', 'black-Linen.png', 'pinstriped_suit.png', 'use_your_illusion.png', 'black_thread.png', 'dark_wall.png', 'dark_brick_wall.png', 'wood_1.png', 'tactile_noise.png', 'black_linen_v2.png', 'bo_play_pattern.png', 'cartographer.png', 'flowers.png', 'carbon_fibre.png', 'dark_geometric.png', 'diagonales_decalees.png', 'dark_matter.png', 'hexabump.png', 'inflicted.png', 'zigzag.png', 'carbon_fibre_v2.png', 'navy_blue.png', 'squares.png', 'vertical_cloth.png', 'dark_circles.png', 'escheresque_ste.png', 'classy_fabric.png', 'px_by_Gre3g.png', 'rubber_grip.png', 'debut_dark.png', 'concrete_wall.png', 'starring.png', 'darkdenim3.png', 'irongrip.png', 'dark_fish_skin.png', 'low_contrast_linen.png', 'tex2res4.png', 'crossed_stripes.png', 'wild_oliva.png', 'green-fibers.png', 'gray_sand.png', 'always_grey.png', 'denim.png', 'random_grey_variations.png', 'pool_table.png', 'brushed_alu_dark.png', 'otis_redding.png', 'mirrored_squares.png', 'green_gobbler.png', 'knitted-netting.png', 'nasty_fabric.png', 'little_pluses.png', 'purty_wood.png', 'white_carbonfiber.png', 'felt.png', 'green_dust_scratch.png', 'retro_intro.png', 'cardboard_1.png', 'solid.png', 'bedge_grunge.png', 'tex2res1.png', 'wide_rectangles.png', 'light_honeycomb.png', 'retina_wood.png', 'vichy.png', 'wood_pattern.png', '60degree_gray.png', 'norwegian_rose.png', 'cracks_1.png', 'grid.png', 'shattered.png', 'cardboard.png', 'cardboard_flat.png', 'honey_im_subtle.png', 'redox_02.png', 'subtle_orange_emboss.png', 'paper_2.png', 'white_sand.png', 'light_alu.png', 'strange_bullseyes.png', 'flowertrail.png', 'husk.png', 'polyester_lite.png', 'tex2res2.png', 'kindajean.png', 'wavecut.png', 'whitey.png', '45degreee_fabric.png', 'cork_1.png', 'batthern.png', 'climpek.png', 'farmer.png', 'diagonal_waves.png', 'escheresque.png', 'grunge_wall.png', 'lyonnette.png', 'paper_1.png', 'smooth_wall.png', 'subtle_surface.png', 'tex2res5.png', 'tileable_wood_texture.png', 'diagonal-noise.png', 'first_aid_kit.png', 'noisy.png', 'texturetastic_gray.png', 'bgnoise_lg.png', 'concrete_wall_3.png', 'crosses.png', 'kuji.png', 'nistri.png', 'beige_paper.png', 'billie_holiday.png', 'grey_sandbag.png', 'lghtmesh.png', 'rough_diagonal.png', 'soft_wallpaper.png', 'textured_stripes.png', 'perforated_white_leather.png', 'ravenna.png', 'soft_circle_scales.png', 'soft_pad.png', 'vaio_hard_edge.png', 'white_leather.png', 'egg_shell.png', 'light_grey_floral_motif.png', 'light_toast.png', 'subtle_stripes.png', 'white_carbon.png', 'blu_stripes.png', 'bright_squares.png', 'brushed_alu.png', 'creampaper.png', 'fabric_plaid.png', 'leather_1.png', 'little_triangles.png', 'natural_paper.png', 'roughcloth.png', 'white_wall.png', 'az_subtle.png', 'embossed_paper.png', 'fabric_1.png', 'rip_jobs.png', 'shinecaro.png', 'shinedotted.png', 'white_plaster.png', 'diamond_upholstery.png', 'extra_clean_paper.png', 'fake_luxury.png', 'noise_lines.png', 'noisy_grid.png', 'subtle_zebra_3d.png', 'candyhole.png', 'chruch.png', 'concrete_wall_2.png', 'cross_scratches.png', 'diamonds.png', 'elegant_grid.png', 'foil.png', 'light_noise_diagonal.png', 'pineapplecut.png', 'project_papper.png', 'triangles_pattern.png', 'weave.png', 'circles.png', 'double_lined.png', 'exclusive_paper.png', 'graphy.png', 'gray_jean.png', 'greyfloral.png', 'light_checkered_tiles.png', 'ricepaper.png', 'shl.png', 'white_bed_sheet.png', 'white_texture.png', 'xv.png', 'arab_tile.png', 'crisp_paper_ruffles.png', 'gold_scale.png', 'gradient_squares.png', 'littleknobs.png', 'merely_cubed.png', 'old_mathematics.png', 'paper.png', 'paper_3.png', 'plaid.png', 'psychedelic_pattern.png', 'pw_maze_white.png', 'scribble_light.png', 'stitched_wool.png', 'white_tiles.png', 'tapestry_pattern.png', 'tex2res3.png', 'ecailles.png', 'satinweave.png', 'white_wave.png', 'handmadepaper.png', 'large_leather.png', 'noise_pattern_with_crosslines.png', 'paven.png', 'small_tiles.png', 'subtle_grunge.png', 'vintage_speckles.png', 'washi.png', 'furley_bg.png', 'hexellence.png', 'old_wall.png', 'ricepaper2.png', 'stacked_circles.png', 'back_pattern.png', 'cubes.png', 'cutcube.png', 'diagonal_striped_brick.png', 'dust.png', 'fancy_deboss.png', 'paper_fibers.png', 'polaroid.png', 'quilt.png', 'redox_01.png', 'struckaxiom.png', 'stucco.png', 'subtle_freckles.png', 'corrugation.png', 'polonez_car.png', 'rockywall.png', 'silver_scales.png', 'small-crackle-bright.png', 'white_brick_wall.png', 'grid_noise.png', 'lil_fiber.png', 'reticular_tissue.png', 'subtlenet2.png', 'wall4.png', 'debut_light.png', 'frenchstucco.png', 'linen.png', 'straws.png', 'striped_lens.png', 'tiny_grid.png', 'white_wall2.png', 'elastoplast.png', 'lined_paper.png', 'pinstripe.png', 'white_paperboard.png', 'gplaypattern.png', 'pyramid.png', 'snow.png', 'worn_dots.png', 'clean_textile.png', 'grilled.png', 'groovepaper.png', 'linedpaper.png', 'skelatal_weave.png', 'skin_side_up.png', 'arches.png', 'connect.png', 'cream_dust.png', 'daimond_eyes.png', 'grey.png', 'whitediamond.png', 'blizzard.png', 'foggy_birds.png', 'ice_age.png', 'light_wool.png', 'lightpaperfibers.png', 'brillant.png', 'subtle_dots.png', 'swirl.png', 'absurdidad.png', 'gridme.png'],
	index: 0,
	patternName: "",
	patternUrl: "",
	shade: "", 
	tint: "", 
 	isPaneUp: false,
 	updateDelay: 3000,

 	//-----------------------------------------------

 	init: function() {
 		//-- set some vars
 		var temp_index = 55;
 		sp.index = Math.floor(Math.random() * sp.patterns.length);
 		sp.patternName = sp.patterns[sp.index];
 		sp.patternUrl = 'http://subtlepatterns.com/patterns/' + sp.patternName;
 		sp.shade = sp.getShade();
 		sp.tint = sp.getTint();


 		sp.displayImages(); //-- bind animation on load
		$('#invis > img').attr('src', sp.patternUrl);

		if(sp.index > 140) sp.changeToDark(); //-- 140 determined with 

		$('#moreInfoBtn').click( function(){ //--bind click function
			sp.setColorsOfInfo();
			sp.toggleInfoPane();
			$('#patternName').html('<a style=\"color:' + sp.shade +'\" href=\"' + sp.patternUrl + '\"">' + sp.patternName.replace(".png", "") + '<\a>');
		});

	    sp.setColorsOfWindow();

	    //-- start the clock
	    sp.refreshHands();
	    sp.startClock();

 	},

	//-----------------------------------------------
	displayImages: function() {
		$('#invis > img').load( function() {
		    $('body').css('background-image', 'url(' + sp.patternUrl +')'); //-- set the background

		    $('.window').animate({
		    	opacity: 1.0
		    }, 200, function() {
			    $('body').animate({
			    	opacity:1.0
			    }, 300, function() {});
			});
		});
	},

	//-----------------------------------------------
	setColorsOfInfo: function() {
		$('#infoPane').css('background-color', sp.tint);
		$('#infoPane').css('box-shadow', '2px 2px 10px ' + sp.shade);
		$('#infoPane').css('color', '' + sp.shade);
		$('.info > h1').css('border-bottom', '1px solid ' + sp.shade );
	},

	//-----------------------------------------------
	toggleInfoPane: function() {
		if(sp.isPaneUp) {
			$('#infoPane').animate( {
				opacity: 0.0
			}, 200, function() {
				$('#infoPane').css('display','none');
			});
		} else {
			$('#infoPane').css('display','block');
			$('#infoPane').animate( {
				opacity: 1.0
				}, 200, function() {
			});
		}
		sp.isPaneUp = sp.isPaneUp ? false : true;
	},

	//-----------------------------------------------
	setColorsOfWindow: function() {
		// $('#source').text( sp.shade ); //-- set text to display the hex
	 //    $('#source').css('color', sp.shade ); //-- set text's color to a dark shade
	 //    $('#source').css('text-shadow', '1px 2px 2px ' + sp.tint ); //-- letterpress it properly
	    $('#moreInfoBtn').css('background-color', sp.shade ); //-- set color of info button
	    $('#moreInfoBtn').css('color', sp.tint ); //-- set color of the info text
	},

	//-----------------------------------------------
	getLuminance: function() {
		//Math.floor(sp.index/sp.patterns.length * 255); //-- assumes uniform distribution

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
			return '#000';
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
		if(sp.index < 50) return '#ddd';
		if(lum > 150) return '#fff';
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

	changeToDark: function() {
		$('#clock-min > img').attr('src', 'img/clock-minhand-dark.png');
		$('#clock-hour > img').attr('src', 'img/clock-hourhand-dark.png');
		$('#clock-outer > img').attr('src', 'img/clock-outer-dark.png');
	},

	//-----------------------------------------------
	// Set interval timeout to update the hands in the future
	startClock: function() {
		setInterval(function(){sp.refreshHands();},sp.updateDelay);
	},
	//-----------------------------------------------
	// Check the time and display the clock
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
	// rotate the hands' elements accordingly
	renderHands: function(hour, min, sec) {
		var hourAngle = (hour%12) * 30 + (min/2); //= h/12*360deg + m/60*30deg
		var minAngle = min*6 + sec/12; //= m/60*360deg + s/60*5deg
		$('#clock-min').css('transform', 'rotate(' + minAngle + 'deg)');
		$('#clock-hour').css('transform', 'rotate(' + hourAngle + 'deg)');
	}

};

$(function(){
	sp.init();
});
