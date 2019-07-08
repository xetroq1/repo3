<nav class="navbar">
     <div class="container-fluid">
          <div class="navbar-header">
               <a href="javascript:void(0);" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
               <a href="javascript:void(0);" class="bars"></a>
               <a class="navbar-brand" href="index.html">PROWEAVER - PSM</a>
          </div>
          <div class="collapse navbar-collapse" id="navbar-collapse">
               <ul class="nav navbar-nav navbar-right">
                    <li class="pull-right"><a href="javascript:void(0);" class="js-right-sidebar" data-close="true"><i class="material-icons">more_vert</i></a></li>
               </ul>
          </div>
     </div>
</nav>
<!-- #Top Bar -->
<section>
   <!-- Left Sidebar -->
     <aside id="leftsidebar" class="sidebar">
     <!-- User Info -->
          <div class="user-info">
               <div class="image">
                    <img src="<?php echo base_url('assets/images/user.png'); ?>" width="48" height="48" alt="User" />
               </div>
               <div class="info-container">
                    <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                    <div class="email">john.doe@example.com</div>
                    <div class="btn-group user-helper-dropdown">
                         <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                         <ul class="dropdown-menu pull-right">
                              <li><a href="javascript:void(0);"><i class="material-icons">person</i>Profile</a></li>
                              <li><a href="/"><i class="material-icons">input</i>Sign Out</a></li>
                         </ul>
                    </div>
               </div>
          </div>
          <!-- #User Info -->
          <!-- Menu -->
          <div class="menu">
               <ul class="list">
                    <li class="header">MAIN NAVIGATION</li>
                    <li class="active">
                         <a href="/home">
                              <i class="material-icons">home</i>
                              <span>Dashboard</span>
                         </a>
                    </li>
                    <li>
                         <a href="/staff">
                              <i class="material-icons">library_books</i>
                              <span>Staff</span>
                         </a>
                    </li>
                    <li>
                         <a href="/assignment">
                              <i class="material-icons">assignment_ind</i>
                              <span>Assignment</span>
                         </a>
                    </li>
                    <li>
                         <a href="/patient">
                              <i class="material-icons">accessible</i>
                              <span>Patient</span>
                         </a>
                    </li>
                    <li>
                         <a href="/reports">
                              <i class="material-icons">description</i>
                              <span>Reports</span>
                         </a>
                    </li>
                    <li>
                         <a href="javascript:void(0);" class="menu-toggle">
                              <i class="material-icons">widgets</i>
                              <span>Widgets</span>
                         </a>
                         <ul class="ml-menu">
                              <li>
                                   <a href="javascript:void(0);" class="menu-toggle">
                                        <span>Cards</span>
                                   </a>
                                        <ul class="ml-menu">
                                             <li><a href="pages/widgets/cards/basic.html">Basic</a></li>
                                        </ul>
                              </li>
                         </ul>
                    </li>
               </ul>
          </div>
