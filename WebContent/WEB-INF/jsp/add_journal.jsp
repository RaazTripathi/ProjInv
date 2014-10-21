<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>        
        <jsp:include page="header.jsp" />
      <script type="text/javascript">
      $( document ).ready(function() {
    	  
    	  $('.datepicker').datepicker({dateFormat: 'dd/mm/yy'});
    	});
                                           
        </script>
    </head>
	<body role="document">
        <jsp:include page="headermenu.jsp" />
        <div class="container">
            <div class="row container">
                <div class="dashboard_main">
                    <div class="desh-icon-bg">
                        <img src="img/i-mgmt.png">
                    </div>
                    <div class="page-title-text"><spring:message code="label.invoice.heading" text="Label value is missing !!!"/></div>
                </div>
            </div>	
            <div class="row">
                <div class="col-md-3">
                    <div class="catagory-main-box top-radius">
                        <div id='cssmenu'>
                       
                         	<jsp:include page="finance_mgt_menu.jsp" />
                      
                         </div>
                        <!-- END MUNU -->    
                    </div>
                </div>
                
<div class="col-md-9">
                        <div class="catagory-main-box top-radius">
                            <div class="cat-box-title cat-title-font top-radius">Add Journal </div>

                            <div class="row tb-margin">
                                <div class="col-sm-2"></div>
                            <form:form action="addjournal.html" commandName="journal" method="post" >
                               
                                <div class="col-sm-8 visible-lg visible-md visible-sm">

                                    <div class="form-group">
                                        <label class="col-sm-4 col-xs-12 control-label search-text">Journal no</label>
                                        <div class="col-sm-8 col-xs-12">
                                            <input  type="text" class="form-control" name="journalNo" path="journalNo" placeholder="Name"/>
                                            
                                        </div>
                                    </div>


 <div class="form-group">
                                        <label class="col-sm-4 col-xs-12 control-label search-text"> Date</label>
                                        <div class="col-sm-8 col-xs-12">
                                           <input  type="text" id="date" class="form-control datepicker" name="date"  placeholder="Date"/>
                                                                          
                                        </div>
                                    </div> 
                                    
                                    <div class="form-group">
                                        <label class="col-sm-4 col-xs-12 control-label search-text"> Price</label>
                                        <div class="col-sm-8 col-xs-12">
                                           <input  type="text" class="form-control" name="price" path="price" placeholder="Price"/>
                                                                          
                                        </div>
                                    </div>
                                     <div class="form-group">
                                        <label class="col-sm-4 col-xs-12 control-label search-text"> Remark text</label>
                                          <div class="col-sm-8 col-xs-12">
                                           <input  type="text" class="form-control" name="remark"  placeholder="ramark text"/>
                                                                          
                                        </div>
                                    </div> 
                                    <div class="form-group">
                                        <label class="col-sm-4 col-xs-12 control-label search-text"> Mode of payment</label>
                                        <div class="col-sm-8 col-xs-12">
<select id="boxMode" name="borb" class="form-control">
	                                            <option value="1">Collection via Cash</option>
	                                            <option value="2">Collection via Bank</option>
	                                        </select>                                                                          
                                        </div>
                                    </div>
                                    

                                                                       
                                  
                                    
                                    <div class="row text-pad-top visible-lg visible-md visible-sm">
                                        <div class="div-center">
                                            <input type="submit" class="btn btn-orange"   value="Save" />
                                            <button type="button" class="btn btn-orange" >Cancel</button>
                                        </div>
                                    </div>                                   
                                </div>
                            </form:form>
                                                        <div class="col-sm-2"></div>
                        </div>                        
                    </div>
                </div>
            </div>
            <div class=""></div>
            <div class=""></div>
        </div>
        <!-- /container -->
        <!--Responsive Table-->
        <!-- Bootstrap core JavaScript
        ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.dataTables.min.js"></script>
        <script src="js/dataTables.responsive.min.js"></script>
        <script src="js/ajax-bootstrap3.js"></script>
        <script type="text/javascript">
            $(document).ready(function() {
                var table = $('#dttable').DataTable();
                $('.row-delete').click(function(eve) {
                    var row = this;
                    eve.preventDefault();
                    $.ajax({
                        url: $(row).attr('href')
                        , success: function(response) {
                            if (response === true) {
                                table.row($(row).closest('tr')).remove().draw(false);
                            }
                        }
                    });
                    return false;
                });
            });
        </script>
       
        
    </body>
</html>