export const srcHtmlString = `<html class=" webkit chrome win js"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Прямой эфир</title>
<link rel="stylesheet" media="all" href="css/css.css">
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" media="all" href="css/popup.css">
<script>
    function fdateTwoDigits(d) {
        let now = new Date();
        now.setDate(now.getDate() + d);
        let mm = now.getMonth() + 1;
        let day = now.getDate();
        if (now.getDate() < 10) day = '0' + now.getDate();
        if (mm < 10) mm = '0' + mm;
        document.write(" " + day + "." + mm + "." + now.getFullYear() + " ");
    }
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</head>

<body>
<header class="container-fluid container mar-b">
    <div class="row">
        <h1 id="site-title"><a href="#" class="replace_ignoring to_form"><img class="myimghead" style="max-width: 934px; width: 100%;" src="images/imagetop4.jpg"></a></h1>
    </div>
</header>
<div class="container" id="main-container">
    <ol class="breadcrumb">
        <li><a href="#" class="to_form">Материалы</a></li>
        <li><a href="#" class="to_form">
                <script>
                    d = new Date();
                    p = new Date(d.getTime() - (86400 * 1000 * 3));
                    monthA = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
                    document.write(" " + p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear() + " ");
                </script> 23 октября 2023  г.
            </a></li>
        <li class="active"><a href="#" class="to_form">Интервью</a>
        </li>
    </ol>
    <div class="row">
        <article class="col-md-9">
            <div>
                <h3 class="myh3"><b>
                        <font color="red">Миллиарды на "подтекании".</font> Расследование вскрыло масштабный заговор
                        врачей и фармацевтов против женского населения <span class="countr2"></span>
                    </b></h3>
                <br>
                <p><strong>Скандалы в области медицины</strong> стали для нас практически регулярными. Ни один
                    человек не хочет болеть и не готов рано умереть, поэтому все люди спешат в аптеки и к врачам,
                    чтобы отдать последние деньги за избавление от недугов. Нашей беспомощностью пользуются жадные
                    до денег фармацевты и врачи. Представьте, насколько соблазнительны и легки для них такие доходы.
                </p>
                <p>Сегодняшний сюжет будет про женское недержание.</p>
                <br>
                <p><img class="myimg2" src="images/11.jpg"></p>
                <center>
                    <p style="text-align: center;" class="timestamps"><time class="text-muted">Материал опубликован:
                            <span class="startdate" format="dayF.monthF.year" daysago="8">
                                <script type="text/javascript">
                                    d = new Date();
                                    p = new Date(d.getTime() - 3 * 86400000);
                                    monthA =
                                        'января ,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'
                                            .split(',');
                                    document.write(p.getDate() - 0 + ' ' + monthA[p.getMonth()] + ' ' + p
                                        .getFullYear());
                                </script>23 октября 2023
                            </span>г.</time><br><time class="text-muted">Обновлён: <span class="startdate" format="dayF.monthF.year" daysago="7">
                                <script type="text/javascript">
                                    d = new Date();
                                    p = new Date(d.getTime() - 0 * 86400000);
                                    monthA =
                                        'января ,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'
                                            .split(',');
                                    document.write(p.getDate() - 0 + ' ' + monthA[p.getMonth()] + ' ' + p
                                        .getFullYear());
                                </script>26 октября 2023
                            </span>г.</time></p>
                </center>
                <p>Хочу <strong>рассказать вам</strong> о том, как с этой болячкой столкнулась моя жена. Я
                    специально решил рассказать все честно, так как тема весь деликатная. Ей 43 года и примерно год
                    назад у нее стали появляться первые признаки болезни.</p>
                <p>2 месяца назад она пошла к врачу. Тот подтвердил, что у нее недержание. Сказал что нужно
                    обязательно лечить, иначе будет только хуже. Здесь он сказал правду. Недержание действительно
                    крайне коварное заболевание, которое без адекватного лечения может привести к проблемам с
                    женским здоровьем, вплоть до бесплодия.</p>
                <p>То, что недержание имеет массу опасных последствий, мы ,конечно, знали и до этого, поэтому и
                    пошли к врачу за лечением.</p>
                <p style="margin: 0 0 10px 0;"><strong>В итоге после обследования врач назначил:</strong></p>
                <ul>
                    <li>«Офлоксин»</li>
                    <li>«Уротол»</li>
                    <li>«Спазмекс»</li>
                    <li>«Фокусин»</li>
                </ul>
                <p></p>
                <p>Веря врачу, жена согласилась на лечение. Исправно принимала все препараты строго по инструкции.
                </p>
                <p>За это время 3 раза сдавала анализы.</p>
                <p>Подтекания после такого лечения действительно прекратились. Но радоваться было рано. Уже через
                    1,5 месяца симптомы снова стали появляться.</p>
                <p>Врач снова выписал препараты (уже другие, более сильные) и снова анализы. Естественно, я удивился
                    такому положению дел. И спросил врача: какова вероятность полного излечения жены. Врач, зная,
                    кто я такой, нервно заерзал на стуле. Он сказал, что вероятность полного излечения около 20%. И
                    от него она не зависит. Просто женское недержание – сложно излечимое заболевание!</p>
                <p>Задумайтесь над этой цифрой – 20%!</p>
                <p>То есть <strong>в 21 веке, когда технологии настолько развиты, </strong>что человечество скоро
                    полетит на Марс, до сих пор не придумали нормальное лекарство от недержания? Ведь с помощью этих
                    же препаратов лечилась еще моя тёща. То есть за 30-40 лет ничего нового так и не создали?</p>
                <p>Я решил поинтересоваться этой темой. Оказалось, что в европейских странах женщины уже даже не
                    помнят, что такое подтекания. А недержание в Европе лечат за 7 дней так же просто, как например,
                    обычную простуду.</p>
                <p>Мы посетили с женой <strong>еще 5 клиник</strong>, как частных, так и государственных.
                    Везде нам выписывали препараты 30-тилетней давности.</p>
                <p>Что вообще происходит? На этот вопрос согласился ответить лишь один уролог. Он же врач высшей
                    категории, кандидат медицинских наук, профессор, ведущий специалист Клиники урологии Гостюнин
                    Михаил Викторович.</p>
                <p><strong>- Михаил Викторович, что происходит?</strong></p>
                <p>- А происходит настоящий геноцид народа и высасывание денег. Нас, как обычно, считают за
                    стадо и стараются на нас заработать. Я много раз уже акцентировал на этом внимание, но никто не
                    пытается это дело урегулировать.</p>
                <p>Вы посмотрите, какие препараты продаются в аптеках от недержания. Это все препараты предыдущих
                    поколений. Например, в Европе они не применяются уже 10 лет точно. В Европе женщина просто идет
                    в аптеку и покупает нужное недорогое средство, принимает его неделю, и она здорова. Никаких
                    антибиотиков и спазмалитиков. У нас же таких лекарств в аптеках не купить – только то, что
                    заставит женщину помучиться и вернуться за лечением еще ни один раз. Так намного выгоднее.</p>
                <p><strong>- Как вы думаете, кто за этим стоит? И почему они это делают?</strong></p>
                <p>- Я знаю, кто за этим стоит. Конкретные имена называть не буду. Но это настоящая аптечная мафия.
                    И происходит это все на самом высоком уровне. Рядовые врачи, безусловно, не при чем, они лишь
                    шестеренки в общем механизме. Они выписывают то, что им велят. Дело в том, что для лечения
                    каждой болезни есть списки рекомендуемых препаратов. Врачи могут выписывать препараты только из
                    них. Самовольно другие выписывать они не могут, иначе их отстранят от врачебной практики. А кто
                    составляет эти списки? Точнее лучше спросить – под чьим влиянием и для чьих интересов включаются
                    в эти списки те или иные препараты. Представьте, насколько повысятся продажи препарата, как
                    только он попадет в этот список.</p>
                <p>Безусловно, эти списки составляются при участии крупных фармацевтических компаний, которые
                    активно наживаются на гражданах. Хуже всего, что эти компании заграничные, как
                    правило, американские. Особенно это сильно развито в лечении как раз недержания, потому что это
                    хроническая болезнь, от которой обычно тяжело избавиться.</p>
                <p>Однако, уже как минимум 10 лет, недержание не считается сложно излечимым заболеванием. Оно легко,
                    просто и безопасно лечится раз и навсегда.</p>
                <p><strong>Продажа лекарств</strong> – самый высокодоходный бизнес в <span class="country_name2">Казахстане</span>.
                    Никто и никогда не захочет терять потенциальных покупателей, а потому надеяться на появление
                    действительно эффективных препаратов на аптечных прилавках не стоит. В Европе совсем другая
                    система здравоохранения. Там за лечение платят страховые компании, которые следят за тем, чтобы
                    в аптеках были представлены самые современные научные разработки.</p>
                <p>В прошлом году осенью я и еще около 30 ведущих ученых-урологов написали коллективное письмо в
                    Минздрав. Это последняя инстанция, в которую можно обратиться у нас в стране, но ответа мы до
                    сих пор не получили… Я даже не могу предположить, почему они молчат.</p>
                <p><strong>- Вы сказали, что современные эффективные препараты есть в Европе, а есть ли они у
                        нас?</strong></p>
                <p>- У нас есть даже лучше! Еще в
                    <script>document.write((new Date).getFullYear() - 1);</script>2022 году НИИ Урологии и
                    интервенционной радиологии <span class="city4"></span> создал средство для лечения женского
                    недержания, которое по характеристикам
                    превосходит все имеющиеся в мире препараты. Оно помогает вылечить подтекания за 7-10 дней и
                    может использоваться на любой стадии болезни. Идеально подходит для женщин в возрасте. Может
                    использоваться для лечения мочеполовой системы в целом и заболеваний почек. Препарат просто
                    превосходный, но он оказался никому не нужным в нашей стране.
                </p>
                <p>Сотрудники НИИ Урологии пытались начать его реализацию через аптечные сети, но в аптеки его не
                    взяли, причем даже причину отказа не удосужились придумать. При этом препарат прошел все
                    необходимые клинические и сертификационные испытания. Хочу показать вам их результаты.</p>
                <p>Всего в испытаниях участвовало около 200 женщин, страдающих от недержания.</p>
                <p><strong>Результаты испытаний:</strong></p>
                <p>
                </p>
                <ul>
                    <li>Полное излечение недержания – 99% исследуемых</li>
                    <li>Воспаление спало, нормализовалось мочеиспускание – 100% исследуемых</li>
                    <li>Восстановление естественной микрофлоры – 95% исследуемых</li>
                    <li>Прошли боли в мочевом пузыре– 99% исследуемых</li>
                    <li>Отсутствие привыкания и побочных эффектов – 100% исследуемых</li>
                </ul>
                <p></p>
                <p><strong>Это просто восхитительные результаты!</strong> Это средство в разы эффективнее всего
                    того, что выписывают врачи. И что важно – это не антибиотик, с помощью него можно лечиться дома
                    без врачей. Оно не вредит женскому здоровью, а даже приносит пользу.</p>
                <p>Интерес к разработке наших ученых уже проявили такие страны, как Франция, Великобритания,
                    Швеция, Израиль, Канада. Он очень хорошо был принят на конференции урологов, проходившей в
                    начале этого года в Копенгагене.</p>
                <p>Но в собственной стране средство оказалось никому не нужным. Потому что в нашей стране сильно
                    развита аптечная мафия, которой плевать на людей.</p>
                <p><strong>- А как называется новый препарат? И что входит в его состав?</strong></p>
                <p>- Препарат называется Уролаб. В состав препарата входят исключительно экстракты лекарственных
                    растений, и
                    никакой химии. Состав тщательно сбалансирован, за счет оказывает комплексное воздействие на
                    болезнь, что и повышает эффективность лечения.</p>
                <p>Всего в состав препарата входят около 30 ингредиентов. Не буду перечислять все, перечислю лишь
                    некоторые.</p>

                <table class="c15">
                    <tbody>
                        <tr class="c3">
                            <td class="c2" colspan="1" rowspan="1">
                                <p class="c0"><span class="c1">Экстракт листьев брусники</span></p>
                            </td>
                            <td class="c2" colspan="1" rowspan="1">
                                <p class="c0"><span class="c1"> Снимает воспаления, предотвращает инфекции
                                        мочеполовой системы </span></p>
                            </td>
                        </tr>
                        <tr class="c3">
                            <td class="c2" colspan="1" rowspan="1">
                                <p class="c0"><span class="c1">Экстракт листьев мяты</span></p>
                            </td>
                            <td class="c2" colspan="1" rowspan="1">
                                <p class="c0"><span class="c1">Ускоряет и облегчает процессы вывода мочи</span></p>
                            </td>
                        </tr>
                        <tr class="c3">
                            <td class="c2" colspan="1" rowspan="1">
                                <p class="c0"><span class="c1">Экстракт цветков гибискуса</span></p>
                            </td>
                            <td class="c2" colspan="1" rowspan="1">
                                <p class="c0"><span class="c1">Благотворно влияет
                                        на реУролаб ивную
                                        систему и восстановление
                                        половой функции</span></p>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <br>
                <p><strong>- Михаил Викторович, состав и действия препарата впечатляют. Скажите, если не в аптеках,
                        то где-нибудь можно выписать Уролаб? Сейчас, например, многие производители открывают
                        сайты в интернете и реализовывают через них.</strong></p>
                <p>- Да. Такая возможность есть. Каждая женщина может выписать Уролаб через официальную форму
                    заказа
                    препарата. Причем сейчас все желающие могут получить Уролаб со скидкой до 100%. Для этого
                    необходимо поучаствовать в розыгрыше <a href="#" class="to_form">на
                        официальном сайте.</a>
                </p>
                <p>Сотрудники НИИ пошли на такой шаг с желанием, чтобы о созданном ими препарате узнали как можно
                    большее число женщин. Ведь если одна женщина сможет излечить недержание этим препаратом быстро и
                    просто, она расскажет об этом своим подругам. Возможно, это изменит ситуацию в стране.</p>
                <p>Насколько я знаю, препарат раздается уже 3 месяца. Я общался со многими женщинами, которые
                    попробовали Уролаб. Они были в полном восторге, им всем удалось избавиться от болезни.</p>
                <p><strong>- Не могли бы вы подробнее рассказать что нужно сделать человеку, чтобы получить скидку
                        100% на Уролаб?</strong></p>
                <p>- Необходимо поучаствовать в розыгрыше скидок и оставить заявку через форму заказа. После этого
                    вам перезвонит врач-консультант. Дальше необходимо перечислить симптомы,
                    рассказать, как долго подтекания, и чем его пробовали лечить. Эта информация
                    нужна для того, чтобы врач мог назначить адекватное лечение. Также врачу-консультанту необходимо
                    будет сказать адрес доставки. После этого препарат вышлют человеку по почте. Соответственно,
                    через 3-5 дней нужно будет прийти в почтовое отделение и получить его.</p>
                <p>На данный момент Уролаб выписали уже более 20000
                    человек. Моя жена тоже решила попробовать это средство. Недержание прошло, как и было обещано.
                    Поэтому я призываю всех женщин перестать кормить жадных до денег фармацевтов и врачей и
                    поддержать отечественный препарат Уролаб, созданный ведущим институтом страны.</p>
                <p>Единственное, только <strong>в самом НИИ Урологии мне сказали,</strong> что партия препарата,
                    которая предназначалась для раздачи по скидке, уже практически закончилась.
                    Количество заявок
                    на препарат в последнее время увеличивается с геометрической прогрессией.</p>
                <p>Однако Уролаб еще есть в наличии, и если вы закажите его прямо сейчас, возможно еще успеете
                    попасть в число счастливчиков, которые успеют вылечить недержание раз и навсегда с помощью этого
                    уникального препарата. Будет ли препарат доступен в будущем, производитель не смог сказать.
                    Скорее всего нет, поскольку выпускать Уролаб за свои деньги слишком накладно, а нашим
                    министрам он просто не нужен…</p>
                <br>
                <p style="  background: rgba(208, 246, 254);
padding: 6px 13px !important;
border-radius: 2px;
border: 4px double rgba(3, 148, 165);
font-family: open sans, arial;
line-height: 28px;
font-size: 16px;
max-width: 100%;
margin: 0 auto;
font-weight: 400;
color: #4a4a4a;">

                    <b>Примечание редакции: Важная новость!</b> Минздрав поддержал производство
                    данного препарата и
                    организовал
                    федеральную программу. Согласно которой все нуждающиеся могут получить Уролаб <a class="vtbadlink to_form"> <span class="new_price">БЕСПЛАТНО</span></a>!<br><br>
                    На текущий момент мероприятие проходит в <span class="country_name2">Казахстане</span> до
                    <script>
                        d = new Date();
                        p = new Date(d.getTime() - (86400 * 1000 * 0));
                        monthA = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
                        document.write(" " + p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + p.getFullYear() + " ");
                    </script> 26 октября 2023  г.
                    включительно. До&nbsp;окончания акции оригинальное средство <a class="vtbadlink to_form" href="#">«Уролаб»</a> можно получить со скидкой до 100% через <a class="vtbadlink to_form" href="#">официальную форму</a> всем желающим!
                </p>
                <hr>
                <p>


                    <font color="red"><b></b></font>
                </p>
                <center>
                    <font color="red"><b>Важно! Только 1 заявка на 1 номер телефона!</b></font>
                </center>
                <p></p>
                <p>Сейчас заявки принимают и обрабатывают <b>круглосуточно</b>. Но из-за большой загруженности,
                    возможно придётся немного подождать.</p>

                <h3 class="myh3">
                    <font color="red"><b>Внимание!</b></font>
                </h3>
                <p id="roulette">Убедитесь, что на сайте есть <b>защитная голограмма</b>:</p> <br>

                <div><img src="images/gologramma.png" width="80px" height="80px" class="golgrammaImg"></div> <br>




                <p>Защитная голограмма это 100% гарантия качества. Она указывает, что вам будет отправлен настоящий
                    Уролаб и оказана необходимая консультация и поддержка.
                </p>


                <div class="zakaz" id="zakaz"></div>
                <div class="spin-wrapper">
                    <p class="ruletka-p">Испытай удачу!<br>
                        Нажми на колесо! Попробуй получить скидку на товар или вовсе забрать <span class="danger-text">даром со скидкой
                            в 100%!</span>
                    </p><div class="wheel-wrapper">
                        <div class="wheel">

                            <div class="wheel-img">
                                <img alt="" class="wheel-img__pic" src="images/wheel.png">
                                <div class="wheel-img__numbers">
                                    <div class="wheel-img__number">75</div>
                                    <div class="wheel-img__number">0</div>
                                    <div class="wheel-img__number">25</div>
                                    <div class="wheel-img__number">0</div>
                                    <div class="wheel-img__number">100</div>
                                    <div class="wheel-img__number">0</div>
                                    <div class="wheel-img__number">50</div>
                                    <div class="wheel-img__number">25</div>
                                </div>
                            </div>
                            <div class="wheel-cursor">
                                <img alt="" src="images/wheel-cursor.png">
                                <span class="cursor-text lt48" onclick="spin();">КРУТИ</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="order_block">
                    <img src="images/product.png" style="width: 100%; max-width: 500px;" alt="">
                    <h3>Все что Вам нужно — это ввести имя и номер телефона.<br>Поторопитесь! У Вас осталось
                        времени:<br><span class="time_remains" id="min">10</span> :
                        <span class="time_remains" id="sec">00</span>
                    </h3>


                    <!----------------------- ВСТАВИТЬ ФОРМУ --------------------------->

                    <form id="order_form">
                        <select name="country" id="country" class="country__selecor input-roulette">
                            
                        <option value="KZ">Казахстан</option></select>
                        <input type="text" class="input-roulette" name="name" id="input-name" placeholder="Введите ваше имя" autocomplete="name" required="">
                        <input type="tel" class="input-roulette phone-black" name="phone" id="input-phone" placeholder="+7" autocomplete="tel" required="">
                        <button type="submit" class="submit-roulette">Получить <span class="new_price" style="font-size: inherit;">БЕСПЛАТНО</span>*</button>
                        <p style="font-size: 17px;">*при заказе курса</p>
                    </form>

                    <!----------------------- ВСТАВИТЬ ФОРМУ --------------------------->

                </div>
                <div class="spin-result-wrapper">
                    <div class="pop-up-window">
                        <p class="ruletka-p pop-up-text">Вы можете забрать товар <span class="danger-text"><span class="new_price">БЕСПЛАТНО</span> </span>
                        </p>
                        <a class="pop-up-button to_form" href="#">OK</a>
                    </div>
                </div>


                <br>
                <div class="box box-blue-light box-social">
                    <div class="pull-right voting-panel"><a class="vote-btn btn btn-success btn-sm to_form" title="Это нравится 2525 людям" data-disable-with="Секундочку…" data-type="html" data-requires-captcha="true" data-remote="true" rel="nofollow" data-method="post" href="#"><span class="glyphicon glyphicon-thumbs-up"></span>Нравится<span class="badge">2525</span></a><a class="vote-btn btn btn-danger btn-sm to_form" title="Это не нравится одному человеку" data-disable-with="Секундочку…" data-type="html" data-requires-captcha="true" data-remote="true" rel="nofollow" data-method="post" href="#"><span class="glyphicon glyphicon-thumbs-down"></span>Не нравится<span class="badge">1</span></a></div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="box box-blue-light comments-block">
                <h3>Комментарии</h3>
            </div>
            <br>
            <div class="vk-container">
                <div class="vk-comment-load">
                    <div class="vk-avatar"><img src="images/kz/w1.jpg" width="48px" class="user-img" height="48px">
                    </div>
                    <div class="vk-comment-name user-name">Дария Абдуллаева</div>
                    <div class="vk-comment-text">
                        <p>Спасибо за расследование. Актуально. Подтекания замучили. Ходила к врачу, лечилась,
                            действительно на пару месяцев только симптомы пропали. А потом все по-новому. Уролаб
                            заказала.</p>
                    </div>
                    <div class="vk-comment-date"><span class="startdate" format="dayF.monthF.year" daysago="8">

                        </span>
                        <script>
                            fdateTwoDigits(0)
                        </script> 26.10.2023  | <a href="#" class="to_form"><span style="cursor: pointer;">Комментировать</span></a>
                    </div>
                </div>
                <div class="vk-comment-load">
                    <div class="vk-avatar"><img src="images/kz/m1.jpg" width="48px" class="user-img" height="48px">
                    </div>
                    <div class="vk-comment-name user-name">Алинур Амангельды</div>
                    <div class="vk-comment-text">
                        <p>Это ужас, что сейчас творится в медицинской сфере. Тоже имею к ней отношение.
                            Действительно настоящий геноцид. Нормальных лекарств просто нет, только одно старье,
                            которое в Европе уже давно не продается.</p>
                    </div>
                    <div class="vk-comment-date"><span class="startdate" format="dayF.monthF.year" daysago="8">

                        </span>
                        <script>
                            fdateTwoDigits(0)
                        </script> 26.10.2023  | <a href="#" class="to_form"><span style="cursor: pointer;">Комментировать</span></a>
                    </div>
                </div>
                <div class="vk-comment-load">
                <div class="vk-avatar"><img src="images/kz/w7.jpg" width="48px" class="user-img" height="48px">
                </div>
                <div class="vk-comment-name user-name">Ирада Каримова</div>
                <div class="vk-comment-text">
                    <p>А я сегодня уже забрала на почте. Не верила, что <span class="new_price">БЕСПЛАТНО</span> до конца. Думала где-то
                        подвох, но в итоге препарат у меня. А в аптеки
                        больше не пойду. По телевизору только и говорят о том, что они обманывают народ и никто
                        с этим ничего не делает... Большое
                        спасибо!</p>
                    <img src="images/otz-2.jpg" style="max-width: 350px; width: 100%; margin: 0 0 10px 0;" alt="">
                </div>
                <div class="vk-comment-date"><span class="startdate" format="dayF.monthF.year" daysago="6">
                    </span>
                    <script>
                        fdateTwoDigits(-3)
                    </script> 23.10.2023  | <a href="#" class="to_form"><span style="cursor: pointer;">Комментировать</span></a>
                </div>
                </div>
                <div class="vk-comment-load">
                    <div class="vk-avatar"><img src="images/kz/w2.jpg" width="48px" class="user-img" height="48px">
                    </div>
                    <div class="vk-comment-name user-name">Анара Кузнецова</div>
                    <div class="vk-comment-text">
                        <p>Тоже заказала. Если <span class="new_price">БЕСПЛАТНО</span>,
                            почему бы не
                            попробовать
                        </p>
                        <p></p>
                    </div>
                    <div class="vk-comment-date"><span class="startdate" format="dayF.monthF.year" daysago="8">

                        </span>
                        <script>
                            fdateTwoDigits(0)
                        </script> 26.10.2023  | <a href="#" class="to_form"><span style="cursor: pointer;">Комментировать</span></a>
                    </div>
                </div>
                <div class="vk-comment-load">
                    <div class="vk-avatar"><img src="images/kz/w3.jpg" width="48px" class="user-img" height="48px">
                    </div>
                    <div class="vk-comment-name user-name">Жулдыз Султанова</div>
                    <div class="vk-comment-text">
                        <p>Полностью подтверждаю! Уролаб - лучшее, что есть. В последнее время при любом чихе
                            или кашле - сразу подтекало. Не знала уже, что делать. Готова был на операцию. Но
                            подруга отговорила, сказала Уролаб попробовать. Я стала его принимать, за несколько
                            дней все как рукой сняло. Рекомендую всем, у кого имеется недержание.</p>
                    </div>
                    <div class="vk-comment-date"><span class="startdate" format="dayF.monthF.year" daysago="8">

                            <script>
                                fdateTwoDigits(-1)
                            </script> 25.10.2023  | <a href="#" class="to_form"><span style="cursor: pointer;">Комментировать</span></a>
                        </span></div>
                </div>
                <div class="vk-comment-load">
                    <div class="vk-avatar"><img src="images/kz/m2.jpg" width="48px" class="user-img" height="48px">
                    </div>
                    <div class="vk-comment-name user-name">Ержан Искаков</div>
                    <div class="vk-comment-text">
                        <p>Ужас, что творится в стране. А что очень удобно наживаться на больных… выхода то у них
                            другого нет…</p>
                    </div>
                    <div class="vk-comment-date"><span class="startdate" format="dayF.monthF.year" daysago="7">

                        </span>
                        <script>
                            fdateTwoDigits(-1)
                        </script> 25.10.2023  | <a href="#" class="to_form"><span style="cursor: pointer;">Комментировать</span></a>
                    </div>
                </div>
                <div class="vk-comment-load">
                    <div class="vk-avatar"><img src="images/kz/w4.jpg" width="48px" class="user-img" height="48px">
                    </div>
                    <div class="vk-comment-name user-name">Данагуль Ибраева</div>
                    <div class="vk-comment-text">
                        <p>К счастью, у нас тоже есть опыт лечения с Уролабом, и тоже положительный. Он
                            впечатляет
                            своим действием. Недержание проходит очень быстро и навсегда</p>
                        <img src="images/otz-1.jpg" style="max-width: 350px; width: 100%; margin: 0 0 10px 0;" alt="">
                    </div>
                    <div class="vk-comment-date"><span class="startdate" format="dayF.monthF.year" daysago="7">

                        </span>
                        <script>
                            fdateTwoDigits(-1)
                        </script> 25.10.2023  | <a href="#" class="to_form"><span style="cursor: pointer;">Комментировать</span></a>
                    </div>
                </div>
                <div class="vk-comment-load">
                    <div class="vk-avatar"><img src="images/kz/w5.jpg" width="48px" class="user-img" height="48px">
                    </div>
                    <div class="vk-comment-name user-name">Гульнур Тайманова</div>
                    <div class="vk-comment-text">
                        <p>Надо себе заказать. Тоже уже не знаю чем лечить эту болячку. Вроде проходит, а потом
                            опять чуть простыну - и снова появляется.</p>
                    </div>
                    <div class="vk-comment-date"><span class="startdate" format="dayF.monthF.year" daysago="7">

                        </span>
                        <script>
                            fdateTwoDigits(-2)
                        </script> 24.10.2023  | <a href="#" class="to_form"><span style="cursor: pointer;">Комментировать</span></a>
                    </div>
                </div>
                <div class="vk-comment-load">
                    <div class="vk-avatar"><img src="images/kz/w6.jpg" width="48px" class="user-img" height="48px">
                    </div>
                    <div class="vk-comment-name user-name">Закия Ибрагимова</div>
                    <div class="vk-comment-text">
                        <p>Прочитала про Уролаб. Впечатляет! Оставила заявку пока раздают
                            <span class="new_price">БЕСПЛАТНО</span>. Да и такое средство
                            точно
                            нужно иметь в аптечке каждой женщине
                        </p>
                    </div>
                    <div class="vk-comment-date"><span class="startdate" format="dayF.monthF.year" daysago="6">

                        </span>
                        <script>
                            fdateTwoDigits(-2)
                        </script> 24.10.2023  | <a href="#" class="to_form"><span style="cursor: pointer;">Комментировать</span></a>
                    </div>
                </div>
                <div class="vk-comment-load">
                    <div class="vk-avatar"><img src="images/kz/w7.jpg" width="48px" class="user-img" height="48px">
                    </div>
                    <div class="vk-comment-name user-name">Ирада Каримова</div>
                    <div class="vk-comment-text">
                        <p>А я сегодня уже забрала на почте. Не верила, что <span class="new_price">БЕСПЛАТНО</span> до конца. Думала где-то
                            подвох, но в итоге препарат у меня. А в аптеки
                            больше не пойду. По телевизору только и говорят о том, что они обманывают народ и никто
                            с этим ничего не делает... Большое
                            спасибо!</p>
                        <img src="images/otz-2.jpg" style="max-width: 350px; width: 100%; margin: 0 0 10px 0;" alt="">
                    </div>
                    <div class="vk-comment-date"><span class="startdate" format="dayF.monthF.year" daysago="6">

                        </span>
                        <script>
                            fdateTwoDigits(-3)
                        </script> 23.10.2023  | <a href="#" class="to_form"><span style="cursor: pointer;">Комментировать</span></a>
                    </div>
                </div>
                <div class="vk-comment-load">
                    <div class="vk-avatar"><img src="images/kz/w8.jpg" width="48px" class="user-img" height="48px">
                    </div>
                    <div class="vk-comment-name user-name">Мадина Бекжанова</div>
                    <div class="vk-comment-text">
                        <p>Заказала. 48 лет. Недержание уже 2 года. Есть риск возникновения рака яичников.</p>
                    </div>
                    <div class="vk-comment-date"><span class="startdate" format="dayF.monthF.year" daysago="5">
                        </span>
                        <script>
                            fdateTwoDigits(-3)
                        </script> 23.10.2023  | <a href="#" class="to_form"><span style="cursor: pointer;">Комментировать</span></a>
                    </div>
                </div>





            </div>
            <div style="text-align: center;"><a href="#" class="olink ord_button to_form">Заказать «Уролаб»</a>
            </div>
        </article>
        <div class="col-md-3">
            <p><a href="#" class="to_form"><img src="images/side01.jpg"></a></p>
            <p><a href="#" class="to_form"><img src="images/side02.jpg"></a></p>
            <p><a href="#" class="to_form"><img src="images/side03.jpg"></a></p>
            <p><a href="#" class="to_form"><img src="images/side3.jpg"></a></p>
        </div>
    </div>
    <div class="box box-gray">
        <center>Нет Запретным Темам. </center>

    </div>
</div>

<div class="demon_popup" style="display: none;">
    <div class="demon_overflow"></div>
    <div class="demon_popup_body">
        <span class="demon_close"></span>
        <h4 class="demon_popup_title">Вы из <span class="country_name1">Казахстана</span>? Подождите!</h4>
        <div class="demon_popup_wrap">
            <img class="product-img1" src="images/product.png" alt="">
            <div class="demon_popup_wrap-text">
                <p>Для Вас сейчас действует специальное ограниченное предложение</p>
                <p> Только до
                    <script>
                        d = new Date();
                        p = new Date(d.getTime());
                        monthA = "января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря".split(",");
                        document.write(p.getDate() + " " + monthA[p.getMonth()] + " " + p.getFullYear()) + " г. ";
                    </script>26 октября 2023
                    г. вы можете получить Уролаб по акции!
                </p>
            </div>
        </div>

        <a href="#" class="to_form popup_btn">узнать подробнее</a>
    </div>
</div>

<script>
    setTimeout(function () {
        var flag = true;
        $(window).mouseout(function (e) {
            if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
                $('.demon_popup').fadeIn(300);
                flag = false;
            }
        })
    }, 0);
    $('.demon_popup, .demon_close, .popup_btn').click(function () {
        $('.demon_popup').fadeOut(100);
    });
    $('.demon_popup_body').click(function (e) {
        e.stopPropagation();
    });
</script>

<script src="js/script.js"></script>
<script>
    $('a').addClass('to_form');
    $('.footer-link').removeClass('to_form');
    $(".to_form").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $('.zakaz').offset().top
        }, 400);
    });
</script>




<!-- подключение скрипта js интеграции ПП -->
<script src="https://afcnt.com/js/af.js"></script>

<!-- активация скрипта js интеграции ПП, третий параметр хеш потока -->
<script>
    afjs.init('land', '/confirm/confirm-ru.html', 'ff7509ba-7874-4b5a-bdd6-714f21473d51');
</script>

<!-- counter.js - скрипт подключения счетчиков ПП -->
<script src="../counter.js"></script>

<!-- price.js - скрипт цены, ГЕО -->
<script src="../../price.js"></script>
<script src="js/change.js"></script>



</body></html>`;

export const landAddress = `http://urolab.org/free/land/16/`;

export const inputTextList = [
    {
        id: "65366ff1973c37d3840fa7c9",
        name: "ГЕО РУ",
        nameData: {
            emoji: {},
        },
        pos: 16849,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65366ff89904d5a2c193bc5b",
        name: "ФРИ И ПАРТ",
        nameData: {
            emoji: {},
        },
        pos: 33585,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536701f697bd05a2d423f54",
        name: '"подтекании" - "климаксе"',
        nameData: {
            emoji: {},
        },
        pos: 50450,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653670498e237f7e3174d592",
        name: '"про женское недержание" - "менопаузу у женщин"',
        nameData: {
            emoji: {},
        },
        pos: 67805,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653670873d6b7b150e6aadbe",
        name: '"этой болячкой столкнулась" - "этой проблемой столкнулась"',
        nameData: {
            emoji: {},
        },
        pos: 84556,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653670d415dcc7e44b5f2004",
        name: '"43 года и примерно год назад у нее стали появляться первые признаки болезни" - "49 лет и примерно год назад у нее стали появляться первые признаки климакса"',
        nameData: {
            emoji: {},
        },
        pos: 101693,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536727aaf0a6463236825a6",
        name: '"2 месяца назад она пошла к врачу. Тот подтвердил, что у нее недержание. Сказал что нужно обязательно лечить, иначе будет только хуже. Здесь он сказал правду. Недержание действительно крайне коварное заболевание, которое без адекватного лечения может привести к проблемам с женским здоровьем, вплоть до бесплодия" - "2 месяца назад она обратилась в клинику. Там подтвердили, что к у неё началась гормональная перестройка организма, пременопауза. Отметили, что нужно обязательно принимать лекарства, иначе состояние может ухудшиться. Менопауза действительно коварный период в жизни женщины, и если ничего не предпринимать то на почве гормонального дисбаланса могут возникнуть очень серьёзные проблемы со здоровьем.',
        nameData: {
            emoji: {},
        },
        pos: 118359,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536729e24fc757f38cfb065",
        name: '"То, что недержание имеет массу опасных последствий, мы ,конечно, знали и до этого, поэтому и пошли к врачу за лечением" - "То, что климакс имеет массу опасных последствий, мы ,конечно, знали и до этого, поэтому и пошли к врачу за лечением"',
        nameData: {
            emoji: {},
        },
        pos: 135354,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653673fdc3d837d5325d1d89",
        name: '«Офлоксин» - "Ци-Клим"',
        nameData: {
            emoji: {},
        },
        pos: 152125,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367442cdb795ed291bb2ec",
        name: '"Уротол" - "Менопейс Плюс"',
        nameData: {
            emoji: {},
        },
        pos: 169201,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367449b3b607510871e0ee",
        name: '«Спазмекс» - "Клималанин»',
        nameData: {
            emoji: {},
        },
        pos: 185952,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536746075164937245037f1",
        name: '"Фокусин" - убрать',
        nameData: {
            emoji: {},
        },
        pos: 202452,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536748d1055f3962c172247",
        name: '"Веря врачу, жена согласилась на лечение. Исправно принимала все препараты строго по инструкции" - "Веря врачу, жена исправно принимала все препараты строго по инструкции"',
        nameData: {
            emoji: {},
        },
        pos: 219804,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367504dc7a0ffc284cd380",
        name: '"За это время 3 раза сдавала анализы" - "За время лечения ей назначили дополнительные обследования, проверяли сердце, суставы, эндокринную систему"',
        nameData: {
            emoji: {},
        },
        pos: 237180,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536755880cdd92e9a52620e",
        name: '"Подтекания после такого лечения действительно прекратились. Но радоваться было рано. Уже через 1,5 месяца симптомы снова стали появляться"  - "Неприятные симптомы после лечения действительно прекратились, но радоваться было рано. Через 1,5 месяца вернулись приливы жара, обильное потоотделение. Перепады настроения и панические атаки участились и усилились."',
        nameData: {
            emoji: {},
        },
        pos: 253808,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536768a2da94e9b2dc308c1",
        name: '"Врач снова выписал препараты (уже другие, более сильные) и снова анализы. Естественно, я удивился такому положению дел. И спросил врача: какова вероятность полного излечения жены. Врач, зная, кто я такой, нервно заерзал на стуле. Он сказал, что вероятность полного излечения около 20%. И от него она не зависит. Просто женское недержание – сложно излечимое заболевание!" - "Врач снова выписал препараты (уже другие, более сильные) и снова анализы. Естественно, я удивился такому положению дел. И спросил врача: какова вероятность полного излечения жены. Врач, зная, кто я такой, нервно заерзал на стуле. Он сказал, что вероятность полного излечения около 20%. И от него она не зависит. Просто женский климакс плохо изученное состояние гормональной системы.',
        nameData: {
            emoji: {},
        },
        pos: 270492,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536776b0f7c060963a89150",
        name: '"не придумали нормальное лекарство от недержания" - "не придумали нормальное средство при менопаузе"',
        nameData: {
            emoji: {},
        },
        pos: 287498,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653677c2ef072c17eaa93199",
        name: '"Оказалось, что в европейских странах женщины уже даже не помнят, что такое подтекания. А недержание в Европе лечат за 7 дней так же просто, как например, обычную простуду" - "Оказалось, что в европейских странах женщины уже даже не помнят, что такое "приливы" при климаксе. А неприятные симптомы менопаузы в Европе убирают за 2 недели, так же просто, как например, обычную простуду.',
        nameData: {
            emoji: {},
        },
        pos: 304196,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653678e1f9fdddfb23b0e06a",
        name: '"лишь один уролог. Он же врач высшей категории, кандидат медицинских наук, профессор, ведущий специалист Клиники урологии Гостюнин Михаил Викторович" - "лишь одна гинеколог-эндокринолог. Она же врач высшей категории, кандидат медицинских наук, профессор, ведущий специалист Клиники Эндокринологии  Гостюнина Ирина Анатольевна"',
        nameData: {
            emoji: {},
        },
        pos: 321363,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536790e87772d192673c8c5",
        name: '"Михаил Викторович, что происходит?" - "Ирина Анатольевна, что происходит?"',
        nameData: {
            emoji: {},
        },
        pos: 338365,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536793faab4b84dfb75d3a1",
        name: '"акцентировал на этом внимание" - "акцентировала на этом внимание"',
        nameData: {
            emoji: {},
        },
        pos: 355017,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653679a9d1457a52f67cd4b7",
        name: '"продаются в аптеках от недержания" - "продаются в аптеках при менопаузе"',
        nameData: {
            emoji: {},
        },
        pos: 371719,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653679db917a373bc0f62743",
        name: '"Никаких антибиотиков и спазмалитиков" - "Никаких антибиотиков, успокоительных и искусственных гормонов"',
        nameData: {
            emoji: {},
        },
        pos: 388589,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367acd3eaf0099147ec9b8",
        name: '"недержание не считается сложно излечимым заболеванием. Оно легко, просто и безопасно лечится раз и навсегда" - менопауза не считается заболеванием. Все её неприятные симптомы просто и безопасно устраняются, и женщина в любом возрасте не сбивается с привычного ей ритма жизни"',
        nameData: {
            emoji: {},
        },
        pos: 405460,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367b158090ef40b1882293",
        name: '"Казахстане" - "России"',
        nameData: {
            emoji: {},
        },
        pos: 422226,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367b2cb74c4f9577ae10a3",
        name: '"ученых-урологов" - "ученых-эндокринологов"',
        nameData: {
            emoji: {},
        },
        pos: 439469,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367ba9b477a02352922865",
        name: '"НИИ Урологии и интервенционной радиологии" - "НМИЦ Эндокринологии"',
        nameData: {
            emoji: {},
        },
        pos: 455924,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367c11afdaa37a2a14021c",
        name: '"лечения женского недержания" - "устранения проблем, связанных с женской гормональной перестройкой, симптомами климакса"',
        nameData: {
            emoji: {},
        },
        pos: 472647,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367c82ae8b33021ea15892",
        name: '"вылечить подтекания за 7-10 дней и может использоваться на любой стадии болезни" - "устранить все симптомы за 7-10 дней и может использоваться на любой стадии гормональной перестройки"',
        nameData: {
            emoji: {},
        },
        pos: 489233,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367ccfd954b7c0330bdceb",
        name: '"НИИ Урологии пытались" -  "НМИЦ Эндокринологии пытались"',
        nameData: {
            emoji: {},
        },
        pos: 506039,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367cf2fa416334dfb75750",
        name: '"этом препарат прошел" - " этом средство прошло"',
        nameData: {
            emoji: {},
        },
        pos: 523125,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367d17f21714680796954f",
        name: '"около 200 женщин" - "около 2000 женщин"',
        nameData: {
            emoji: {},
        },
        pos: 539924,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367d5263dacef4a4f30db2",
        name: '"Полное излечение недержания – 99% исследуемых" - "Устранение приливов жара, обильного потоотделения, озноба  - 96,3% исследуемых"',
        nameData: {
            emoji: {},
        },
        pos: 557056,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367d536d163f00053ffb5b",
        name: '"Воспаление спало, нормализовалось мочеиспускание – 100% исследуемых" - "Нормализация гормонального баланса - 91% исследуемых"',
        nameData: {
            emoji: {},
        },
        pos: 574218,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367d559a0a29c80c050044",
        name: '"Восстановление естественной микрофлоры – 95% исследуемых" - "Устранение сухости во влагалище, зуда, жжения  - 97% исследуемых"',
        nameData: {
            emoji: {},
        },
        pos: 591329,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367d55afa6fdf30a6c9d1c",
        name: '"Прошли боли в мочевом пузыре– 99% исследуемых" - "Устранение воспалительных процессов органов малого таза  - 93% исследуемых"',
        nameData: {
            emoji: {},
        },
        pos: 608525,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367d5be29634ec5d432834",
        name: '"Уролаб" - "BLACK COHOSH"',
        nameData: {
            emoji: {},
        },
        pos: 794656,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65367fd9c421eeca4d29dbf8",
        name: '"Препарат называется Уролаб. В состав препарата входят исключительно экстракты лекарственных растений, и никакой химии. Состав тщательно сбалансирован, за счет оказывает комплексное воздействие на болезнь, что и повышает эффективность лечения" - "Средство называется BLACK COHOSH. В его состав входят исключительно экстракты лекарственных растений, и никакой химии. Состав тщательно сбалансирован, за счет оказывает комплексное воздействие на организм женщины, что и повышает эффективность средства"',
        nameData: {
            emoji: {},
        },
        pos: 811190,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536802504d7f3f21785187d",
        name: '"Экстракт листьев брусники" - "Цимицифуга"',
        nameData: {
            emoji: {},
        },
        pos: 828232,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536804d0c0f883bb14dbf0f",
        name: '"Снимает воспаления, предотвращает инфекции мочеполовой системы" - "Снижает приливы жара, избавляет от повышенной потливости, головных болей, звона в ушах"',
        nameData: {
            emoji: {},
        },
        pos: 845094,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536808ea110a702dc11bc5c",
        name: '"Экстракт листьев мяты" - "Брокколи"',
        nameData: {
            emoji: {},
        },
        pos: 861855,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653680b69d74b3e290ce75eb",
        name: '"Ускоряет и облегчает процессы вывода мочи" - "Антиоксидантный эффект, ослабляет симптомы климакса, снимает менструальные боли, антидепрессивное действие, снижает риск возникновения опухолевых заболеваний"',
        nameData: {
            emoji: {},
        },
        pos: 878619,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653680d1bcd8eaae4581a053",
        name: '"Экстракт цветков гибискуса" - "Семена тыквы"',
        nameData: {
            emoji: {},
        },
        pos: 895743,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653681121c97b5f30d033723",
        name: '"Благотворно влияет на реУролаб ивную систему и восстановление половой функции" - "Наполняет организм энергией в течение дня, снимает беспричинную усталость, нормализует ночной сон"',
        nameData: {
            emoji: {},
        },
        pos: 912730,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65368155230b408f15f281f7",
        name: '"Михаил Викторович, состав и действия препарата" - "Ирина Анатольевна, состав и действие средства"',
        nameData: {
            emoji: {},
        },
        pos: 929717,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536819280787fabb92db5de",
        name: '"со скидкой до 100%" - для фри, "со скидкой до 90%" - для Парт',
        nameData: {
            emoji: {},
        },
        pos: 946456,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653681d3a31ed45785276cbb",
        name: '"излечить недержание" - "избавиться о  проблем, доставляемых менопаузой"',
        nameData: {
            emoji: {},
        },
        pos: 963540,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536820a371a315975a1f33f",
        name: '"избавиться от болезни" - "избавиться т всех неприятных симптомов"',
        nameData: {
            emoji: {},
        },
        pos: 980288,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653682362d49f201a1bd7e28",
        name: '"скидку 100%" для фри, для парт - скидку 90%',
        nameData: {
            emoji: {},
        },
        pos: 997413,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653683b0591b6fa8a0f958cd",
        name: '"рассказать, как долго подтекания, и чем его пробовали лечить" - "рассказать, как давно возникли проблемы, и что принимали для их устранения"',
        nameData: {
            emoji: {},
        },
        pos: 1014695,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653683dd3f46813862195a95",
        name: '"После этого препарат" - "После этого средство"',
        nameData: {
            emoji: {},
        },
        pos: 1032026,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653684183faebd291df2f4f9",
        name: '"Недержание прошло" - "Все неприятные симптомы прошли"',
        nameData: {
            emoji: {},
        },
        pos: 1049165,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653684557b91f74b250e5bd0",
        name: '"в самом НИИ Урологии" - "в самом НМИЦ Эндокринологии"',
        nameData: {
            emoji: {},
        },
        pos: 1066371,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536846f5c7c5685f537c32d",
        name: '"партия препарата" - "партия средства"',
        nameData: {
            emoji: {},
        },
        pos: 1083319,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653684b3e594c95e600981f1",
        name: '"заявок на препарат" - "заявок на средство"',
        nameData: {
            emoji: {},
        },
        pos: 1100072,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653684cdbebe1a37d3186e3b",
        name: '"успеют вылечить недержание раз и навсегда с помощью этого уникального препарата"  - "успеют справиться с климаксом раз и навсегда с помощью этого уникального средства"',
        nameData: {
            emoji: {},
        },
        pos: 1117245,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536854837cd5ae6db531907",
        name: '"Будет ли препарат доступен в будущем" - "Будет ли он доступен в будущем"',
        nameData: {
            emoji: {},
        },
        pos: 1134351,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536855e6ae35b512af536be",
        name: '"производство данного препарата" - "производство данного средства"',
        nameData: {
            emoji: {},
        },
        pos: 1150884,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536858e08c0fb61d95ddb4d",
        name: "БЕСПЛАТНО - для ФРИ, для Парт  - ставим цену.",
        nameData: {
            emoji: {},
        },
        pos: 1168207,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653685e23169007ea982ac30",
        name: "Внимание! Убедитесь, что на сайте есть защитная голограмма: **убираем +картинку голограммы тоже убрать**",
        nameData: {
            emoji: {},
        },
        pos: 1184955,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536860228ecf24cc1e67eca",
        name: "Защитная голограмма это 100% гарантия качества. Она указывает, что вам будет отправлен настоящий Уролаб и оказана необходимая консультация и поддержка. -  **убираем**",
        nameData: {
            emoji: {},
        },
        pos: 1201787,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65368631f3788f06d8dfd000",
        name: '"Казахстан" - "Россия"',
        nameData: {
            emoji: {},
        },
        pos: 1218843,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536865114210654853c5003",
        name: "АВЫ и ФИ мнеяем по ГЕО",
        nameData: {
            emoji: {},
        },
        pos: 1235306,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536869404e1e38d08c3ded0",
        name: '"Подтекания замучили" - "Приливы замучили"',
        nameData: {
            emoji: {},
        },
        pos: 1251932,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536872e492926cda3c78378",
        name: '"при любом чихе или кашле - сразу подтекало. Не знала уже, что делать. Готова был на операцию. Но подруга отговорила, сказала Уролаб попробовать" - "всё становилось всё хуже и хуже. И приливы, и панические атаки. И с мужем ничего не получалось - дискомфорт страшный. Подруга порекомендовала BLACK COHOSH попробовать"',
        nameData: {
            emoji: {},
        },
        pos: 1268891,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536875a69dd52bfb1e9ec44",
        name: '"имеется недержание" - "климакс в разгаре"',
        nameData: {
            emoji: {},
        },
        pos: 1285494,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65368788b962afa802c36d76",
        name: '"Недержание проходит очень быстро и навсегда" - Все симптомы проходят быстро и навсегда"',
        nameData: {
            emoji: {},
        },
        pos: 1302278,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653687a5b0b61a1b16383c72",
        name: '"Промофото в отзывах убираем"',
        nameData: {
            emoji: {},
        },
        pos: 1318836,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653687eab97d0d0f92d1d558",
        name: '"Тоже уже не знаю чем лечить эту болячку. Вроде проходит, а потом опять чуть простыну - и снова появляется" - "Тоже уже не знаю чем спасаться. Вроде проходит, а потом опять появляется."',
        nameData: {
            emoji: {},
        },
        pos: 1335642,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653688243927f71b5356203c",
        name: '"итоге препарат у меня" - "итоге средство у меня"',
        nameData: {
            emoji: {},
        },
        pos: 1352407,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "65368848474bbfd5e34907c6",
        name: '"Недержание уже 2 года" - "Климакс уже 2 года"',
        nameData: {
            emoji: {},
        },
        pos: 1369319,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6536886edda5700184137f31",
        name: "ДОбавляем реквизиты",
        nameData: {
            emoji: {},
        },
        pos: 1385861,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "653688d5240206ccc864d20d",
        name: "**Для Преленда** - убираем розыгрыш и форму заказа. Оставляем только кнопку.",
        nameData: {
            emoji: {},
        },
        pos: 1402707,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
    {
        id: "6537674720e633bf1ffc4181",
        name: 'Перед вопросом  "Михаил Викторович, что происходит?" - поставить картинки как на вложении "Пример расположения картинок"',
        nameData: {
            emoji: {},
        },
        pos: 346691,
        state: "complete",
        due: null,
        dueReminder: null,
        idMember: null,
        idChecklist: "65366feb77ae75d7d657f54a",
    },
];


