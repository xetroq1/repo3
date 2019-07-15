<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Model extends CI_Model {

     public function __construct(){
          parent::__construct();
          echo "adsadddddddd";
     }

     public function getRows($table ,$select, $where = array() , $join = array() ,$group = "", $res = 'array' ){

          if(!empty($select)){
               $this->db->select($select);
          }else{
               $this->db->select("*");
          }

          if(!empty($where)){
               $this->db->where($where);
          }

          if(!empty($join)){
               foreach($join as $key => $value){
                    $val = explode(":",$value);
                    $this->db->join($key,$val[0],$val[1]);
               }
          }

          if(!empty($group)){
               $this->db->group_by($group);
          }

          $query = $this->db->get($table);

          switch ($res) {
               case 'array':
               return $query->result_array();
                    break;
               case 'obj':
               return $query->result();
                    break;
               case 'row':
               return $query->row();
                    break;
               default:
               return $query->result_array();
                    break;
          }
     }

     public function get_datatables($table, $column_order, $select = "*", $where = "", $join = array(), $limit, $offset, $search, $order,$group = '')
  	{
  	  	$this->db->from($table);
  	  	$columns = $this->db->list_fields($table);
  	  	if($select){
  	  		$this->db->select($select);
  	  	}
  	  	if($where){
  	  		$this->db->where($where);
  	  	}
  	  	if($join){
  	  		foreach ($join as $key => $value) {
  				$this->db->join($key,$value,'left');
  	  		}
  	  	}
  	  	if($search){
  	  		$this->db->group_start();
  	  		foreach ($column_order as $item)
  	  		{
  	  			$this->db->or_like($item, $search['value']);
  	  		}
  	  		$this->db->group_end();
  	  	}
  	  	if($group)
  	  		$this->db->group_by($group);

  	  	if($order)
  	  		$this->db->order_by($column_order[$order['0']['column']], $order['0']['dir']);

  	    	$temp = clone $this->db;
  	    	$data['count'] = $temp->count_all_results();

  	  	if($limit != -1)
  	  		$this->db->limit($limit, $offset);

  	  	$query = $this->db->get();
  	  	$data['data'] = $query->result();

  	  	$this->db->from($table);
  	  	$data['count_all'] = $this->db->count_all_results();
  	  	return $data;
  	}
    public function insert($table){
       $this->db->insert($table);
       return $this->db->insert_id();
    }
    public function insert2($table){
       $this->db->insert($table);
       return $this->db->insert_id();
    }
    public function num_rows(){
       return $this->get()->num_rows();
    }
    public function count_all_results(){
       return $this->db->count_all_results();
    }
    public function last_query(){
       return $this->db->last_query();
    }
    public function affected_rows(){
       return $this->db->affected_rows();
    }

    // RETURN THIS FUNCTIONS

    public function select($value='*')
    {
     $this->db->select($value);
     return $this;
    }

    public function from($value='')
    {
     $this->db->from($value);
     return $this;
    }

    public function where($field='',$value='')
    {
      if ($value=='') {
       $this->db->where($field);
      }else{
       $this->db->where($field, $value);

      }
     // $this->db->where('privilege_code', 'asdd');
     return $this;
    }
    public function join($table='',$where='',$type = '')
    {
     $this->db->join($table, $where,$type);
     return $this;
    }

    public function set($field='',$value='')
    {
     $this->db->set($field, $value);
     return $this;
    }
    public function get($table='')
    {
      if ($table=='') {
       return $this->db->get();
      }else{
       $this->db->get($table);
       return $this;
      }
    }
    public function group_start()
    {

     $this->db->group_start();
     return $this;
    }
    public function group_end()
    {

     $this->db->group_end();
     return $this;
    }
    public function like($item='',$value)
    {
     $this->db->like($item, $value);
     return $this;
    }
    public function or_like($item='',$value)
    {
     $this->db->or_like($item, $value);
     return $this;
    }
    public function order_by($item,$value)
    {
     $this->db->order_by($item, $value);
     return $this;
    }
    public function limit($item,$value)
    {
     $this->db->limit($item, $value);
     return $this;
    }

    public function row()
    {
     return $this->db->get()->row();
    }
    public function row_array()
    {
     return $this->db->get()->row_array();
    }
    public function result()
    {
     return $this->db->get()->result();
    }

    public function result_array()
    {
     return $this->db->get()->result_array();
    }

    public function get_array($table='')
    {
     return $this->db->get_array($table);
     // return this;
    }

    public function update($table='')
    {
     return $this->db->update($table);
     // return this;
    }


    // NOTE:

    public function is_exist($table='',$field='',$value='')
    {
     // $this->view_page('upload_success', $data);
     $raw_db = $this->db
     ->select()
     ->from($table)
     ->where($field,$value);

     // $result =$raw_db->result_array();

     if ($raw_db->get()->num_rows()>0){
       return true;
     }else{
       return false;
     }
    }


}
