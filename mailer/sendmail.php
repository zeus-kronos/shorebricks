<?php
    require_once 'class.phpmailer.php';
    require_once 'class.smtp.php';
    
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials : true');
    header('Access-Control-Allow-Headers : true');
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        
        $json_obj = json_decode(trim(file_get_contents('php://input')));
    
        // YOU COULD ALSO CHANGE THE SUBJECT TEXT TO SUIT YOU
        $subject = 'New Message from Shorebricks Client';
        // YOU COULD PLAY AROUND AND STYLE THIS MESSAGE THE WAY YOU LIKE BUT MAKE SURE TO COPY OUT EVERYTHING SOMEWHERE IN CASE YOU SCREW UP. LOL.
        $message = "<div style='padding:25px 25px;color:#606060;line-height:1.5;'>
            
            <h2> &#128640; New client message from Shorebricks website</h2>
            
            <span style='font-size:14px;'> {$json_obj->fullname} </span>
            <br/>
            <a href='mailto: {$json_obj->email} '> {$json_obj->email} </a>
            <br/>
            <span style='font-size:14px;'> {$json_obj->project_type} </span>
            
            <p style='font-size:16px;padding:20px 20px;margin:10px auto 20px auto;background-color:ghostwhite;border-radius:10px;line-height:1.7;'>
                {$json_obj->additional_details}
            </p>
            
            <h3 style='margin-bottom:0;'> Best regards, </h3>
            <h3 style='margin-top:0;margin-bottom:0;'> {$json_obj->fullname} </h3>
            
        </div>";
        
        $mail = new PHPMailer(true);
        
        try	{
            $mail->IsSMTP();
            $mail->isHTML(true);
            $mail->SMTPDebug  = 0;
            $mail->SMTPAuth   = true;
            $mail->SMTPSecure = "ssl";
            // TITAN MAIL CREDENTIALS
            $mail->Host       = "smtp.titan.email";
            $mail->Username   ="contact@shorebricks.com";
            $mail->Password   ="lQzLNizoft";
            $mail->Port       = 465;
            $mail->AddAddress('contact@shorebricks.com', 'Shorebricks');
            $mail->SetFrom('contact@shorebricks.com', 'Shorebricks Website');
            $mail->AddReplyTo($json_obj->email, $json_obj->fullname);
            $mail->Subject    = $subject;
            $mail->Body 	  = $message;
            $mail->AltBody    = $message;
    
            if ($mail->Send()) {
    			http_response_code(200);
                echo json_encode([
                    "status" => "success",
                    "message" => "Email sent successfully",
                    "data" => []
                ]);
    		} else {
    		    http_response_code(500);
                echo json_encode([
                    "status" => "failed",
                    "message" => "Could not send email",
                    "data" => []
                ]);
    		}
    	
    	} catch(phpmailerException $ex) {			
    		http_response_code(500);
            echo json_encode([
                "status" => "failed",
                "message" => "Error while sending email",
                "data" => []
            ]);
    	}
    }
?>