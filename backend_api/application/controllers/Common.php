<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Common extends MY_Controller{

  public function __construct()
  {
    parent::__construct();
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
  }

  public function index()
  {
  }

  public function get_users()
  {
    $result=$this->MY_Model
    ->select()
    ->from('users')
    ->get();
    echo ($result->num_rows())?json_encode($result->result()):false;
  }

  public function get_row($table='users',$id_field='id',$id='5')
  {
    $result=$this->MY_Model
    ->select()
    ->from($table)
    ->where($id_field,$id)->get();

    if ($result->num_rows()) {
      echo ($result->num_rows())?json_encode($result->row()):false;
    }else{
      echo "false";
    }
  }

  public function add_data($table='users'){

    $result=$this->MY_Model
    ->set($_POST)
    ->insert($table);

    echo ($this->db->affected_rows())?true:false;

    // echo true;

    // echo "Hi";
    // echo "<pre>";
    // print_r($_POST);
    // echo "</pre>";
    // exit();
      // $this->db->set($_POST);
      // $result=$this->db->insert($table);
      //
      // if ($result->num_rows()) {
      //   echo ($result->num_rows())?json_encode($result->row()):false;
      // }else{
      //   echo "false";
      // }
  }

  public function get_data($table="users")
  {
    $result=$this->MY_Model
    ->select()
    ->from($table)
    ->get();
    
    echo ($result->num_rows())?json_encode($result->result()):false;
  }

}
