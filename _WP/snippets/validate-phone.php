<?php
// validate phone 
 echo substr_replace( preg_replace( "/[^0-9]/" , '' , get_field('telefon','option') ) , '+7' , 0 , 1 )