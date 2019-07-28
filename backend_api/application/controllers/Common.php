<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/*
          SAMPLE REQUEST CONTENT (post/get)
          Array
          (
              [table] => tasks
              [set] => Array
                  (
                      [title] => cc
                      [description] => ccccc
                  )
              [where] => Array
                  (
                      [task_id] => 1
                  )
          )
*/

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

  public function delete_data(){
    // <form class="" method="post">
    //   <input type="text" name="where[task_id]">
    //   <input type="submit" value="submit">
    // </form>
    if (empty($_REQUEST['where'])) die();
    if (empty($_REQUEST['table'])) die();

    $result=
    $this->db
    ->where($_REQUEST['where'])
    ->delete($_REQUEST['table']);

    echo $this->db->affected_rows();
  }

  public function update_data(){


    // <form class="" method="post">
    //   <input type="text" name="set[title]">
    //   <input type="text" name="set[description]">
    //   <input type="text" name="where[task_id]">
    //   <input type="submit" value="submit">
    // </form>
    if (empty($_REQUEST['where'])) die();
    if (empty($_REQUEST['table'])) die();
    if (empty($_REQUEST['set'])) die();

    $result=
    $this->db
    ->set($_REQUEST['set'])
    ->where($_REQUEST['where'])
    ->update($_REQUEST['table']);

    echo $this->db->affected_rows();
    // ->where($_REQUEST['id_field'],$_REQUEST['id'])


  }

  public function get_users()
  {
    $result=$this->MY_Model
    ->select()
    ->from('users')
    ->get();
    echo ($result->num_rows())?json_encode($result->result()):false;
  }

  public function get_data(){
    // if (empty($_REQUEST['where'])) die();
    if (empty($_REQUEST['table'])) die();

    $result=$this->MY_Model
    ->select()
    ->from($_REQUEST['table']);
    if (empty($_REQUEST['where'])) {
      $result=$result
      ->get()
      ->result();
    }else{
      $result=$result
      ->where($_REQUEST['where'])
      ->get()
      ->row();
    }

    echo json_encode($result);
  }

  public function is_data_exist(){

    $result=$this->MY_Model
    ->select()
    ->from($_REQUEST['table'])
    ->where($_REQUEST['where'])
    ->get()
    ->num_rows();

    echo json_encode($result);
  }
  public function get_row($table='users',$id_field='id',$id='5')
  {
    $result=$this->MY_Model
    ->select()
    ->from($table)
    ->where($id_field,$id)->get();

    echo ($result->num_rows())?json_encode($result->row()):false;
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

}
