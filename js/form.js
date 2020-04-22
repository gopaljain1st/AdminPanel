function yesnoCheck(that)
                                {
                                        if (that.value == "Student") {
                                            document.getElementById("st").style.display= "block";
                                        } else {
                                            document.getElementById("st").style.display = "none";
                                        }
                                        if (that.value == "Employee") {
                                            document.getElementById("emp").style.display = "block";
                                        } else {
                                            document.getElementById("emp").style.display = "none";
                                        }
                                }
