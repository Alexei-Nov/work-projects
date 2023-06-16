<?php

define('MODX_API_MODE', true);
define('MODX_API_BASE', '../../../');
include_once MODX_API_BASE.'/manager/includes/config.inc.php';
include_once MODX_API_BASE.'/manager/includes/document.parser.class.inc.php';

$modx = new DocumentParser;
$modx->db->connect();
$modx->getSettings();
startCMSSession();
$modx->minParserPasses=2;

$pid = intval($_POST['pid']);
$add_compl_id = intval($_POST['add_compl_id']);

$res = array();
$doc = $modx->getDocument($pid);
if ($doc) {
    $res['title'] = $doc['pagetitle'];
    $res['price'] = $price = $modx->runSnippet('calc_price', array('pid'=>$pid));

	if ($add_compl_id) {
		$compl_doc = $modx->getDocument($add_compl_id);
		if ($compl_doc) {
			$res['name'] .= ' + '.$compl_doc['pagetitle'];
			$compl_price = $modx->runSnippet('calc_price', array('pid'=>$add_compl_id));
			$price += $compl_price;
			$res['add_compl_price'] = $compl_price;
		}
	}	
    $res['price_str'] = $modx->runSnippet('format_price', array('price'=>$price));
    $res['curr'] = $modx->runSnippet('rcurr');
    $res['fold'] = $modx->runSnippet('gal_3d_fold', array('pid'=>$pid));
    $pres_id = $modx->runSnippet('prod_present', array('pid'=>$pid, 'param'=>'id'));
    $pres_isactive = $modx->runSnippet('prod_present', array('pid'=>$pid, 'param'=>'isactive'));
    if ($pres_isactive) {
        $res['pres_id'] = $pres_id;
        $res['pres_name'] = $modx->runSnippet('prod_present', array('pid'=>$pid, 'param'=>'name'));
    }
}

echo json_encode($res);
?>