<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$secret = '6LcTrB0UAAAAAMhk9FzmG1YchJqzuKg2VuuIibir';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // переменная в которую будем сохранять результат работы
  $data['result']='success';
  
  if ($data['result']=='success') {
    // блок проверки invisible reCAPTCHA
    require_once (dirname(__FILE__).'/recaptcha/autoload.php');
    // если в массиве $_POST существует ключ g-recaptcha-response, то...
    if (isset($_POST['g-recaptcha-response'])) {
      // создать экземпляр службы recaptcha, используя секретный ключ
      $recaptcha = new \ReCaptcha\ReCaptcha($secret);
      // получить результат проверки кода recaptcha
      $resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
      // результат проверки
      if ($resp->isSuccess()){
        $data['result']=='success';
      } else {
        /* //для отладки: 
          $errors = $resp->getErrorCodes();
          $data['error-captcha'] = $errors;
        */
        $data['captcha']='Код капчи не прошёл проверку на сервере!';
        $data['result']='error';
      }
    } else {
      $data['captcha']='Код капчи не прошёл проверку на сервере!';
      $data['result']='error';
    }
  }
  
  

$name = $_POST['name'];
$number = $_POST['number'];
$email = $_POST['email'];
$message = $_POST['message'];

// Настройки
$mail = new PHPMailer;

$mail->isSMTP(); 
$mail->Host = 'spl64.hosting.reg.ru';  
$mail->SMTPAuth = true;                      
$mail->Username = 'info@chinaside.ru'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'aN3dd9*6'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('info@chinaside.ru'); // Ваш Email
$mail->addAddress('info@chinaside.ru'); // Email получателя
//$mail->addAddress('chinaestvl@163.com'); // Еще один email, если нужно.

// Прикрепление файлов
  //for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
       // $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
       // $filename = $_FILES['userfile']['name'][$ct];
        //if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
         //   $mail->addAttachment($uploadfile, $filename);
        //} else {
         //   $msg .= 'Failed to move file to ' . $uploadfile;
       // }
  //  }   
                                 
// Письмо
$mail->isHTML(true); 
$mail->Subject = "Письмо с chinaside"; // Заголовок письма
$mail->Body    = "Имя: $name . Телефон: $number . Почта: $email . Сообщение: $message"; // Текст письма

// Результат
if(!$mail->send()) {
    echo 'Ошибка';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Сообщение отправлено';
}
}
?>