import React,  {useState} from "react";

export default function BookingForm() {
    return (
        <form action="mailto:akinpds@gmail.com" method="post" enctype="text/plain">
            {/* Name:<br>
                <input type="text" name="name"><br>
                    E-mail:<br>
                        <input type="text" name="mail"><br>
                            Comment:<br>
                                <input type="text" name="comment" size="50"><br><br>
                                    <input type="submit" value="Send">
                                        <input type="reset" value="Reset"> */}
            <input type="text" name="name" placeholder="E-mail"/>
                <br>
                </br>
            <input type="text" name="mail" placeholder="Name"/>
            <br>
            </br>
            <input type="text" name="comment" placeholder="Comment" />
            <input type="submit" value="Send" />

        </form>
    )
};