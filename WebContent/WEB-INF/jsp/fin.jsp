<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>        
        <jsp:include page="header.jsp" />
    </head>
            <jsp:include page="headermenu.jsp" />
    
    <body role="document">
<%--         <jsp:include page="../headermenu.jsp" />
 --%>        <div class="container">
            <div class="row container">
                <div class="dashboard_main">
                    <div class="desh-icon-bg">
                        <img src="img/i-mgmt.png">
                    </div>
                    <div class="page-title-text"><spring:message code="approve.list.header" text="Label value is missing !!!"/></div>
                </div>
            </div>	
            <div class="row">
                <div class="col-md-3">
                    <div class="catagory-main-box top-radius">

                        <!--<div class="cat-table-title"></div>-->
                        <!-- MUNU -->    
                         <div id='cssmenu'>
                         
						<%@include file="finance_mgt_menu.jsp"%>
				
                        </div> 
                        <!-- END MUNU -->    
                    </div>
                </div>
                
                
                <div class="col-md-9">
                        <div class="catagory-main-box top-radius">
                            <div class="cat-box-title cat-title-font top-radius">Setting</div>

                            <div class="row tb-margin">
                                <div class="col-sm-2"></div>
                            <form action="finmgmt.html" method="post"  acceptcharset="UTF-8">
                               <%--  <form:hidden path="id" />
                                <form:errors path="*" cssClass="errorblock" element="div" />
 --%>
                                <div class="col-sm-8 visible-lg visible-md visible-sm">

                                   
                                   

                                    

                                    <div class="form-group">
                                        <label class="col-sm-4 col-xs-12 control-label search-text">Select Financial Year:</label>
                                        <div class="col-sm-8 col-xs-12">
                                            <select class="form-control" name="finyear">
                                                
                                                    <option value="1">2014-2015</option>
                                                  <option value="2">2015-2016</option>
                                                    <option value="3">2016-2017</option>
                                                    <option value="4">2017-2018</option>
                                                    <option value="5">2019-2020</option>
                                                
                                            </select>                                       
                                        </div>
                                    </div>

                                   
                                    
                                    
                                    <div class="row text-pad-top visible-lg visible-md visible-sm">
                                        <div class="div-center">
                                            <input type="submit" class="btn btn-orange"  onclick="return submitDetailsForm();" value="Save" />
                                            <button type="button" class="btn btn-orange" onclick="javascript:history.back();">Cancel</button>
                                        </div>
                                    </div>                                   
                                </div>
                            </form>
                                                      
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
        <script type="text/javascript">
        </script>
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