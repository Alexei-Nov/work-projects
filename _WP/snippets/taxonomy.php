<?php?>
<!-- taxonomy -->
<section class="block-tabs" <?=($value['id_bloka'] ? 'id=' . $value['id_bloka'] : '')?>>
	<div class="block-tabs__container">
		<h2 class="title"><?=$value['zagolovok']?></h2>
		<div class="block-tabs__wrapper">
			<div class="block-tabs__content">
				<div class="block-tabs__image">
					<img src="<?=$value['kartinka']?>" alt="img">
				</div>
				<div class="block-tabs__card card">
					<div class="card__wrapper">
						<div class="card__title"><?=$value['zagolovok_info']?></div>
						<div class="card__slider slider">
							<div class="swiper-wrapper">
								<?$elems = $value['info'];?>
								<? foreach ($elems as $elem): ?>
									<div class="card__slide swiper-slide">
										<div class="card__info">
											<span><?=$elem['nazvanie']?></span><span><?=$elem['znachenie']?></span>
										</div>
									</div>
								<? endforeach ?>
							</div>
							<div class="slider__panel">
								<div class="slider__btn-prev"></div>
								<div class="slider__btn-next"></div>
							</div>
							<div class="slider__scrollbar"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="block-tabs__tabs tabs">
			<?$terms = get_terms( [
				'taxonomy' => 'kvartiri',
				'hide_empty' => false,
				'parent' => '0'
			] );?>

			<div class="tabs__header">
				<? foreach ($terms as $term): ?>
					<div class="tabs__link btn-border"><?=$term->name?></div>
				<? endforeach ?>
			</div>

			<div class="tabs__body">
				<? foreach ($terms as $term): ?>
					<div class="tabs__item block-tabs__cards element-hidden" data-tab="<?=$term->name?>">
						<?$childrenTerms = get_term_children( $term->term_id, 'kvartiri' );?>
						
						<?foreach ($childrenTerms as $childrenTerm):?>
							<?$loop = new WP_Query( array(
								'post_type' => 'planirovki',
								'tax_query' => array(
									array(
										'taxonomy' => 'kvartiri',
										'field' => 'term_id',
										'terms' => $childrenTerm,
									),
								),
								'posts_per_page' => -1,
								'orderby' => 'date', 
								'order' => 'ASC',
							));?>
							<?while ( $loop->have_posts() ): $loop->the_post();?>
								<div class="card-info">
									<div class="card-info__image">
										<img src="<?=get_field('izobrazhenie')?>" alt="img">
									</div>
									<?if(get_field('tegi')){?> 
										<div class="card-info__tags">
											<?$elems = get_field('tegi');?>
											<? foreach ($elems as $elem): ?>
												<span><?=$elem['tekst_tega']?></span>
											<? endforeach ?>
										</div>
									<?}?>
									<div class="card-info__content">
										<div class="card-info__info">
											<div class="card-info__title"><?=get_the_title();?></div>
											<div class="card-info__text"><?=get_field('opisanie');?></div>
										</div>
										<div class="card-info__more table-more">
											<div class="table-more__item">
												<div class="table-more__title">2</div>
												<div class="table-more__desc">Секция</div>
											</div>
											<div class="table-more__item">
												<div class="table-more__title"><?=get_field('ploshhad');?> м²</div>
												<div class="table-more__desc">Площадь</div>
											</div>
											<div class="table-more__item">
												<div class="table-more__title"><?=get_term($childrenTerm,'kvartiri')->name?></div>
												<div class="table-more__desc">Этаж</div>
											</div>
										</div>
									</div> 
									<div class="card-info__btn">
										<div data-modal="modalPice" class="btn">Запросить стоимость</div>
									</div>
								</div>
							<?php endwhile; ?>
							<?wp_reset_postdata();?>
						<?endforeach?>
					</div>
				<? endforeach ?>
			</div>
		</div>
	</div>
</section>