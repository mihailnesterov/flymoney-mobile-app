import React from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../themes/default';
import Page from '../containers/Page';

export default Faq = () => {
    return (
        <Page header={'Ответы на часто задаваемые вопросы'}>
            
            <Text style={styles.title}>
                В каком режиме работает обменник FlyMoney.biz
            </Text>
            <Text style={styles.paragraph}>
                Мы работаем ежедневно.
            </Text>
            <Text style={styles.paragraph}>
                С 09:00 до 21:00 по МСК
            </Text>
            <Text style={styles.title}>
                VISA/Master TRY работает только в рабочие Часы Турции по будням с 9:00 до 16:00
            </Text>
            <Text style={styles.paragraph}>
                Также возможны дополнительные перерывы в работе в случае обновления функционала системы. В данных случаях уведомления будут заблаговременно размещены на нашем сайте в разделе «Новости».
            </Text>

            <Text style={styles.title}>
                Как создать заявку и как пользоваться Fly Money
            </Text>
            <Text style={styles.paragraph}>
                Для того, чтобы создать заявку, Вам необходимо следовать дальнейшей инструкции:
            </Text>
            <Text style={styles.paragraph}>
                1. Выберите направление обмена (например: в столбце «Отдаю» — Garanti Bank TRY, в столбце «Получаю» — Сбер Банк RUB) и укажите сумму, которую Вы хотите обменять или получить.
            </Text>
            <Text style={styles.paragraph}>
                2. Заполните данные обмена, в столбце ввода данных, укажите банковские реквизиты, а затем, во втором окне, заполните все требуемые для обмена данные свой e-mail, телефон, ФИО (Рекомендуется вводить как в паспорте)
            </Text>
            <Text style={styles.paragraph}>
                3. Рекомендуем проверить все данные и после этого, нажать на кнопку «Обменять».
            </Text>
            <Text style={styles.paragraph}>
                4. На финальном окне у Вас отобразиться информация с данными о вашем переводе и о том, куда нужно перевести денежные средства. 
            </Text>
            <Text style={styles.paragraph}>
                5. Скопируйте наши реквизиты, перейдите в Ваш кошелек. Вставьте сумму, указанную в заявке, и наши реквизиты. Подтвердите перевод(Обращаем внимание, что сумма должна полностью совпадать с той, которую вы указали при составлении заявки) Обязательно убедитесь в том, что сумма у Вас списалась.
            </Text>
            <Text style={styles.paragraph}>
                6. Далее вернитесь на наш сайт и подтвердите оплату, нажав на кнопку «Я оплатил». Готово.
            </Text>
            <Text style={styles.paragraph}>
                7. После создания заявки Вам на почту придет письмо со статусом вашей заявки, а так же Вы автоматически будете зарегистрированы на нашем сервисе. Вы сможете отслеживать статус заявок в своем личном кабинете, а также участвовать в реферальной программе и получать скидки в дальнейших обновлениях.
            </Text>

            <Text style={styles.title}>
                Как создать заявку?
            </Text>
            <Text style={styles.paragraph}>
                Обмен производится оператором в ручном режиме и занимает от 5 до 120 минут после поступления платежа по заявке, также скорость обмена зависит от загруженности наших операторов и правильности заполнения заявки.
            </Text>

            <Text style={styles.title}>
                Как отследить статус заявки?
            </Text>
            <Text style={styles.paragraph}>
                Статус Вашей заявки Вы можете отслеживать в Личном кабинете в разделе «Мои заявки».
            </Text>
            <Text style={styles.paragraph}>
                Также эта информация доступна на почте, которую Вы указывали при создании заявки (регистрации). Вам автоматически будут поступать сообщения с информацией о смене статуса Вашей заявки. В личном кабинете вы так-же можете отменить вашу заявку, если вы не нажали на «Я оплатил»
            </Text>            

            <Text style={styles.title}>
                Заявку оплатил, но деньги на мой счет не поступили. В чем причина?
            </Text>
            <Text style={styles.paragraph}>
                Причины могут быть разные. Для того, чтобы обмен был успешно завершен, пожалуйста, убедитесь, что Вы все сделали правильно:
            </Text>
            <Text style={styles.paragraph}>
                1. Проверьте, правильно ли Вы указали свои реквизиты для перевода (кошелек, счет или карту). Если реквизиты указаны неверно, Ваша заявка получит статус «Отменена», после чего вам на почту придет письмо с отменой заявки, а  затем вы сможете создать новую. В случае, если Ваша заявка обработана на ошибочные реквизиты, возврат средств невозможен. Рекомендуем тщательно проверять верность указываемых данных до подтверждения заявки;
            </Text>
            <Text style={styles.paragraph}>
                2. Проверьте, списались ли с Вашего счета средства. Если поступления от Вас мы не увидим, заявка будет отменена;
            </Text>
            <Text style={styles.paragraph}>
                3. Возможна задержка перевода со стороны платежной системы или банка. В этом случае ускорить процесс мы не в силах, остается только ждать. Для выяснения причин задержки Вы можете позвонить или написать в тех.поддержку Вашей платежной системы или банка;
            </Text>
            <Text style={styles.paragraph}>
                4. Все причины индивидуальны. Поэтому, если Ваша причина не относиться ни к одной из вышеперечисленных, Вы можете написать нам  в online поддержку на нашем сайте. Мы всегда рады помочь!
            </Text>

            <Text style={styles.title}>
                Возможно ли отменить заявку?
            </Text>
            <Text style={styles.paragraph}>
                В случае, если Ваша заявка обработана, средства возврату не подлежат.
            </Text>
            <Text style={styles.paragraph}>
                Если заявка оплачена, но еще не выполнена, Вы можете вернуть свои средства (за вычетом комиссии за перевод), написав в службу online поддержки нашего сайта.
            </Text>

            <Text style={styles.title}>
                Я забыл пароль к аккаунту, как его восстановить?
            </Text>
            <Text style={styles.paragraph}>
                Перейдите на страницу восстановления пароля (кнопка «Забыли пароль»)на странице Аккаунт и укажите зарегистрированный e-mail (логин). На Вашу почту будет отправлено письмо со ссылкой для подтверждения восстановления пароля. Необходимо открыть письмо и перейти по ссылке. После подтверждения изменения пароля, можно будет указать новый пароль.
            </Text>

            <Text style={styles.title}>
                Не пришло письмо с паролем/создание заявки
            </Text>
            <Text style={styles.paragraph}>
                Если вам не пришло письмо с подтверждением электронного адреса в течение 24 часов с момента регистрации, то, в первую очередь, необходимо убедиться, что при регистрации вы указали верный адрес.Если вы ввели email с недопустимыми символами, то заявку даже не получится создать, система не распознаёт такие email адреса и не даст вам перейти на последнее окно подтверждения заявки. Помимо этого, некоторые почтовые сервисы могут воспринимать подобные письма как нежелательные, помечать их как спам или же вовсе не доставлять их до адресата. Для решения проблемы вам могут помочь следующие пункты:
            </Text>
            <Text style={styles.paragraph}>
                1. Убедитесь, что при регистрации Вы указали верный адрес. Для этого пройдите процедуру регистрации повторно. Если появляется сообщение, что электронный адрес занят, значит он был введен верно;
            </Text>
            <Text style={styles.paragraph}>
                2. Убедитесь, что Вы проверяете тот почтовый ящик, который указали при регистрации. Данный пункт особенно актуален для тех, кто использует несколько электронных ящиков, или же компьютером пользуются несколько членов семьи;
            </Text>
            <Text style={styles.paragraph}>
                3. Проверьте папку «Спам»;
            </Text>
            <Text style={styles.paragraph}>
                4. Проверьте настройки вашего спам-фильтра (если используется);
            </Text>
            <Text style={styles.paragraph}>
                5. Свяжитесь со службой поддержки вашего почтового сервиса и выясните, нет ли каких-либо ограничений с их стороны.
            </Text>
            <Text style={styles.paragraph}>
                Если ни один из пунктов не помог, пожалуйста, обратитесь в online поддержку на нашем сайте. Мы поможем в решении любой проблемы.
            </Text>

            <Text style={styles.title}>
                Что делать, если я потерял доступ к почте?
            </Text>
            <Text style={styles.paragraph}>
                В данное время для авторизации на нашем сайте и совершения операций необходимо иметь полный доступ к почте, указанной при регистрации аккаунта. Если Вы утратили доступ к Вашей почте, необходимо воспользоваться формой восстановления пароля либо обратиться в техническую поддержку Вашего почтового аккаунта.
            </Text>
            <Text style={styles.paragraph}>
                После восстановления доступа к почте, в целях безопасности, настоятельно рекомендуем сменить пароль от личного кабинета на нашем сервисе.
            </Text>
            <Text style={styles.paragraph}>
                Если доступ к прошлой почте отсутствует, служба поддержки в праве запросить паспортные данные для восстановления пароля.
            </Text>

            <Text style={styles.title}>
                Меня просят очистить Куки (Cookies) и Кеш (Chache). Как это сделать?
            </Text>
            <Text style={styles.paragraph}>
                Веб-страницы нашего сайта могут отображаться некорректно в связи с тем, что в них были внесены изменения, а Ваш браузер продолжает использовать устаревшие данные из кэша.
            </Text>
            <Text style={styles.paragraph}>
                В таких случаях мы просим почистить Куки и Кеш для того чтобы весь функционал полноценно и безошибочно работал.
            </Text>
            <Text style={styles.paragraph}>
                В интернете существует масса видео и статей как почистить кэш для любого устройства и браузера.
            </Text>
            <Text style={styles.paragraph}>
                Исправить самостоятельно нам технически невозможно, т.к. это полностью зависит от устройства и браузера клиента.
            </Text>

            <Text style={styles.title}>
                Безопасность
            </Text>

            <Text style={styles.title}>
                Обращаем ваше внимание, что мы никогда не просим наших клиентов переводить деньги в соц.сетях или по телефону и мессенджерах. Обменная операция проходит только на нашем сайте flymoney.biz!
            </Text>
            <Text style={styles.paragraph}>
                1. Будьте внимательны при заполнении полей “Номер счета» и “Ф.И.О.» адресата. Допустив ошибку, Вы можете безвозвратно потерять свои денежные средства. Относитесь к заполнению информации с ответственностью! Указывайте информацию без сокращений, мы рекомендуем вводить информацию как в паспорте!
            </Text>
            <Text style={styles.paragraph}>
                2. Если вам предлагают сделать перевод средств, Ваши знакомые, родственники, друзья под предлогом в долг и тд., используя при этом соц. сети, скайп или звонят с незнакомого номера телефона. Удостоверьтесь, что это именно тот человек которого Вы знаете, свяжитесь с ним, а лучше предложите встретиться лично и все обсудить. Если по какой либо причине связаться с человеком Вы не можете, то лучше проигнорировать просьбу, что бы не стать жертвой мошенников.
            </Text>
            <Text style={styles.paragraph}>
                3. Убедительная просьба не сообщать 3-им лицам, срок действия Вашей банковской карты и CVV-код. Банк, исключительно в редких случаях звонит первым, и никогда не просит сообщить CVV-код Вашей банковской карты, пароли от Вашей почты и Онлайн Банкинга. Не диктуйте 3-им лицам «секретные кода» пришедшие в смс на Ваш телефон привязанный к Вашей банковской карте.
            </Text>
            <Text style={styles.paragraph}>
                4. Откажитесь от проведения средств через ваши счета, Собственников которых Вы не знаете. В противном случае Вы можете стать соучастником аферы, которая может повлечь за собой Уголовные разбирательства.
            </Text>
            <Text style={styles.paragraph}>
                5. Также уточняйте у оператора в онлайн чате нашего сайта о той или иной информации присланной от нашего сервиса к Вам на почту. Возможно мы ничего не присылали Вам, а от нашего имени Вам пишет МОШЕННИК с целью наживы.
            </Text>
            <Text style={styles.paragraph}>
                6. Мы никогда не предоставляем займов-кредитов, не просим денежные средства у пользователей в долг или под проценты и не принимаем пожертвования или подарки. Обмены осуществляются только на нашем сайте flymoney.biz
            </Text>
            <Text style={styles.paragraph}>
                7. Сервис не запрещает обмены на счета 3-х лиц, но крайне не рекомендует проведение таких операций. Такие операции не безопасны и часто используются мошенниками.
            </Text>
            <Text style={styles.paragraph}>
                8. Никому не сообщайте и не передавайте пароли и логины от Ваших электронных кошельков. Это может привести к печальным последствиям и потере денежных средств.
            </Text>
            <Text style={styles.paragraph}>
                9. Меняйте периодично пароли от Ваших электронных кошельков. И храните Ваши секреты в труднодоступных местах, желательно не на ПК и в заметках Вашего телефона.
            </Text>
            <Text style={styles.paragraph}>
                10. Проверяйте наличие SSL сертификата, на сервисах или сайтах при использовании интернета. Проверяйте также кем он выдан, он может быть просто сгенерирован на сервере владельца сайта. Сайты без SSL сертификата не защищают шифрованием получаемые или передаваемые Вами данные. Ознакомиться с нашим SSL сертификатом и проверить его надежность вы можете на главной нашего сайта, нажав кнопку с зеленым замочком и надписью «Проверено и Защищено». Также в интернете множество ресурсов сканирующих сайт и показывающих оценку SSL защиты сайта. 
            </Text>
            <Text style={styles.paragraph}>
                11. Повторяем, мы не делаем обмены через Соц. сети, скайп, телефон, электронную почту и другие мессенджеры
            </Text>

            <Text style={styles.title}>
                Обмен осуществляется только на нашем сайте flymoney.biz
            </Text>

            <Text style={styles.title}>
                Помните!  Мошенника распознать просто: он предложит небывалое счастье за невероятно короткое время!
            </Text>

        </Page>
    );
}

const { xsmall, small, xlarge } = theme.sizes;
const { bolder } = theme.fontWeight;
const { alignJustify } = theme.textAlign;

const styles = StyleSheet.create({
    title: {
        marginTop: small,
        marginBottom: small,
        fontWeight: bolder
    },
    paragraph: {
        lineHeight: xlarge,
        textAlign: alignJustify,
        marginBottom: xsmall,
    }
});