<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://localhost/drupal8/node/2?_format=json",
    CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 30,
	    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	      CURLOPT_CUSTOMREQUEST => "GET",
	        CURLOPT_HTTPHEADER => array(
		    "accept: application/json",
		        "cache-control: no-cache",
			    "postman-token: ec942fc4-cda8-2146-9c78-b60523b86ff0"
			      ),
			      ));

			      $response = curl_exec($curl);
			      $err = curl_error($curl);

			      curl_close($curl);

			      if ($err) {
			        echo "cURL Error #:" . $err;
				} else {
				  echo $response;
				  }
				  ?>
