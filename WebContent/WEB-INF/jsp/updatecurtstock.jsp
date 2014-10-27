<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>
        <%--<%@include file="header.jsp" %>--%>
        <jsp:include page="header.jsp"></jsp:include>
            <script type="text/javascript">
                function submitDetailsForm() {
                    return true;
                }
                $(document).ready(function(){
                
                	
                	$('#sub').click(function(){
                		
                		$('#act').val(0);
                		
                		alert("hello");
                		$('#formtopost').submit();
                		
                	});
                	
                	
                	
                	
                });
                
                
                
                
            </script>

            <style>
                .error {
                    color: #ff0000;
                }

                .errorblock {
                    color: #000;
                    background-color: #ffEEEE;
                    border: 3px solid #ff0000;
                    padding: 8px;
                    margin: 16px;
                }
            </style>

        </head>

        <body role="document">

        <jsp:include page="headermenu.jsp"></jsp:include>

            <div class="container">
                <div class="row container">
                    <div class="dashboard_main">
                        <div class="desh-icon-bg">
                            <img src="img/i-mgmt.png">
                        </div>
                        <div class="page-title-text">Add Item</div>
                    </div>
                </div>	
                <div class="row">
                    <div class="col-md-3">
                        <div class="catagory-main-box top-radius">

                            <!--<div class="cat-table-title"></div>-->
                            <!-- MUNU -->    
                            <div id='cssmenu'>
                                <ul>

                                    <li class='has-sub active'><a href='#'><span>ITEMS</span></a>
                                        <ul style='display: block;'>
                                            <li><a href='item.html'><span>Items</span></a></li>
                                            <li><a href='item_category.html'><span>Item Category</span></a></li>
                                            <li class='last'><a href='item_unit.html'><span>Item Units</span></a></li>
                                        </ul>
                                    </li>
                                    <li class=''><a href='purchase_order.html'><span>Purchase Order</span></a></li>
                                    <li class=''><a href='purchase_requisition.html'><span>Purchase Requisition</span></a></li>
                                    <li class='last'><a href='account.html'><span><spring:message code="menu.account" text="Label value is missing !!!"/></span></a></li>
                                </ul>
                            </div>
                            <!-- END MUNU -->    

                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="catagory-main-box top-radius">
                            <div class="cat-box-title cat-title-font top-radius">Update Stock for ${name}  </div>

                            <div class="row tb-margin">
                                <div class="col-sm-2"></div>
                            <form:form id="formtopost" action="updatecurtstock.html" method="post"  acceptcharset="UTF-8">


<input type="hidden" name="id" value="${id}">

<input type="hidden" id="act" name="act" value="1">
                                <div class="col-sm-8 visible-lg visible-md visible-sm">

                                   

                                    <div class="form-group">
                                        <label class="col-sm-4 col-xs-12 control-label search-text"> Stock:</label>
                                        <div class="col-sm-8 col-xs-12">
                                            <input  type="text" class="form-control" name="currstock" placeholder="Stock"/>
                                        </div>
                                    </div>

                                    
                                    
                                   
                                    
                                    
                                    <div class="row text-pad-top visible-lg visible-md visible-sm">
                                        <div class="div-center">
                                            <input id="add" type="submit" class="btn btn-orange"   value="add" />
                                            <button id="sub" type="button" class="btn btn-orange">Subtract</button>
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


        <!-- Bootstrap core JavaScript
        ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="js/bootstrap.min.js"></script>
    </body>
</html>
