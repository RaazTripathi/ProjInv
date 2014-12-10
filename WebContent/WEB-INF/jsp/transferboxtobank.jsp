<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>        
        <jsp:include page="header.jsp" />
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
                        <div class="cat-box-title cat-title-font top-radius">
                        	All Assets for Company 
                        </div>
                        
                        <div class="row tb-margin">
                                        <div class="col-sm-4">
                                          Total money in Box = ${box.value}
                                        </div>

<div class="col-sm-4">
                                          Total money in Bank = ${bank.value}
                                        </div>

                                    </div>
                        <div class="tab-content">
                            <div class="tab-pane active" id="demo">
                                
                                
                                <form action="transfertobank.html" method="post">
                                
                                
                                 <div class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
Amount to transfer	                                    </label>
                                        <div class="col-sm-8 col-xs-12">
                                            <input type="text" name="val" placeholder="amount to transfer"> 
                                       
                                                                                   <input type="submit" value="Transfer"> 
                                       
                                       
                                        </div>
                                    </div>
                                
                                
                                
                                
                                
                                </form>
                                
                                
                                
                                
                                
                                                            </div>                            
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