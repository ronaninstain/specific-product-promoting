<?php /* Template Name: Download Free Questions */ ?>
<?php get_header() ?>
<?Php

$user = wp_get_current_user();

$entries = GFAPI::get_entries('20');

foreach ($entries as $entry) {
    if ($entry['created_by'] == $user->ID && count($entries) > 0) {
        the_content();
    }
}

/*if (count($entries) > 0) {
   
}*/

?>
<?php get_footer() ?>