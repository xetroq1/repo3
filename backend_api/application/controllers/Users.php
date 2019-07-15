<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Users extends MY_Controller{

  public function __construct()
  {
    parent::__construct();
  }

  public function index()
  {
    echo "asd";
  }

  public function get_users()
  {

    $result=$this->MY_Model()
    ->select()
    ->from('users')
    ->result_array();
    echo "<pre>";
    print_r($result);
    echo "</pre>";
    exit();
  }
}
