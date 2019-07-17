<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Common extends MY_Controller{

  public function __construct()
  {
    parent::__construct();
  }

  public function index()
  {
  }

  public function get_users()
  {
    $result=$this->MY_Model
    ->select()
    ->from('users')
    ->result_array();
    echo "<pre>";
    print_r($result->result_array);
    echo "</pre>";
    exit();
  }

  public function get_row($table='users',$id_field='id',$id='5')
  {
    $result=$this->MY_Model
    ->select()
    ->from($table)
    ->where($id_field,$id)->get();

    if ($result->num_rows()) {
      echo "1";
    }else{
      echo "2";
    }

    echo ($result->num_rows())?json_encode($result->row()):false;
  }
}
