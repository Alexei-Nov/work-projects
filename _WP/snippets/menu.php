<?php
// menu
if (!class_exists('bootstrap_menu')) {
 class bootstrap_menu extends Walker_Nav_Menu {
  private $open_submenu_on_hover;

  function __construct($open_submenu_on_hover = true) {
         $this->open_submenu_on_hover = $open_submenu_on_hover;
     }

  function start_lvl(&$output, $depth = 0, $args = array()) {
   $output .= "\n<ul class=\"nav__submenu\">\n";
  }
  function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
   $item_html = '';
   parent::start_el($item_html, $item, $depth, $args);
      $item_html = str_replace('<a', '<a class="navlink navlink_lvl2"', $item_html);
      $item_html = str_replace('</a>', '</a>', $item_html);
   if ($depth == 0 ) {
      $item_html = str_replace('<a class="navlink navlink_lvl2"', '<a class="navlink navlink_lvl1"', $item_html);
      $item_html = str_replace('</a>', '</a>', $item_html);
   }
   $output .= $item_html;
  }
  function display_element($element, &$children_elements, $max_depth, $depth = 0, $args, &$output) {
      $element->classes[] = 'nav__item';
   if ( $element->current ) $element->classes[] = 'active';
   $element->is_dropdown = !empty( $children_elements[$element->ID] );
   if ( $element->is_dropdown ) {
       if ( $depth === 0 ) {
           $element->classes[] = 'nav__item_has-children';
           if ($this->open_submenu_on_hover) $element->classes[] = 'show-on-hover';
       } elseif ( $depth === 1 ) {
           $element->classes[] = 'dropdown-submenu';
       }
   }
   parent::display_element($element, $children_elements, $max_depth, $depth, $args, $output);
  }
 }
}