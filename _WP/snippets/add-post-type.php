<?php
// add post type to admin sidebar
if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
        'page_title'     => 'Основные данные',
        'menu_title'    => 'Основные данные',
        'menu_slug'     => 'theme-general-settings',
        'capability'    => 'edit_posts',
        'redirect'        => false
    ));
};