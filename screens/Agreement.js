import React from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../themes/default';
import Page from '../containers/Page';

export default Agreement = () => {
    return (
        <Page header={'Соглашение'}>
                
            <Text style={styles.title}>1. Стороны соглашения.</Text>
            <Text style={styles.paragraph}>
                Договор заключается между интернет сервисом по обмену титульных знаков, далее Исполнитель, — с одной стороны, и Заказчик, в лице того, кто воспользовался услугами Исполнителя, — с другой стороны.
            </Text>
            
            <Text style={styles.title}>2. Список терминов.</Text>
            <Text style={styles.paragraph}>
                2.1. Обмен титульных знаков — автоматизированный продукт интернет обслуживания, который предоставляется Исполнителем на основании данных правил.
            </Text>
            <Text style={styles.paragraph}>
                2.2. Заказчик — физическое лицо, соглашающееся с условиями Исполнителя и данного соглашения, к которому присоединяется.
            </Text>
            <Text style={styles.paragraph}>
                2.3. Титульный знак — условная единица той или иной платежной системы, которая соответствует расчетам электронных систем и обозначает объем прав, соответствующих договору системы электронной оплаты и ее Заказчика.
            </Text>
            <Text style={styles.paragraph}>
                2.4. Заявка — сведения, переданные Заказчиком для использования средств Исполнителя в электронном виде и свидетельствующие о том, что он принимает условия пользования сервисом, которые предлагаются Исполнителем в данной заявке.
            </Text>

            <Text style={styles.title}>3. Условия соглашения.</Text>
            <Text style={styles.paragraph}>
                Данные правила считаются организованными за счет условий общественной оферты, которая образуется во время подачи Заказчиком заявки и является одной из главных составляющих настоящего договора. Общественной офертой именуются отображаемые исполнителем сведения об условиях подачи заявки. Главным составляющим общественной оферты являются действия, сделанные в завершении подачи заявки Заказчиком и говорящие о его точных намерениях совершить сделку на условиях предложенных Исполнителем перед завершением данной заявки. Время, дата, и параметры заявки создаются Исполнителем автоматически в момент окончания формирования данной заявки. Предложение должно приняться Заказчиком в течение 24 часов от окончания формирования заявки. Договор по обслуживанию вступает в силу с момента поступления титульных знаков в полном размере, указанном в заявке, от Заказчика на реквизиты Исполнителя. Операции с титульными знаками учитываются согласно правилам, регламенту и формату электронных систем по расчетам. Договор действителен в течение срока , который устанавливается с момента подачи заявки до расторжения по инициативе одной из сторон.
            </Text>
            
            <Text style={styles.title}>4. Предмет соглашения.</Text>
            <Text style={styles.paragraph}>
                Путем использования технических методов Исполнитель обязуется выполнять обмен титульных знаков за комиссионное вознаграждение от Заказчика, после подачи данным лицом заявки и совершает это путем продажи титульных знаков лицам, желающим их приобрести по сумме, указанной не ниже, чем в заявке поданной Заказчиком. Денежные средства Исполнитель обязуется переводить на указанные Заказчиком реквизиты. В случае возникновения во время обмена прибыли, она остается на счету Исполнителя, как дополнительная выгода и премия за комиссионные услуги.
            </Text>

            <Text style={styles.title}>5. В дополнение.</Text>
            <Text style={styles.paragraph}>
                5.1. Если на счет Исполнителя поступает сумма, отличающаяся от указанной в заявке, Исполнитель делает перерасчет, который соответствует фактическому поступлению титульных знаков. Если данная сумма превышает указанную в заявке более чем на 10%, Исполнитель расторгает договор в одностороннем порядке и все средства возвращаются на реквизиты Заказчика, с учетом вычтенной суммы на комиссионные расходы во время перевода.
            </Text>
            <Text style={styles.paragraph}>
                5.2. В случае, когда титульные знаки не отправляются Исполнителем на указанные реквизиты Заказчика в течение 24 часов, Заказчик имеет полное право потребовать расторжение соглашения и аннулировать свою заявку, тем самым совершая возврат титульных знаков на свой счет в полном объеме. Заявка на расторжение соглашения и возврата титульных знаков выполняется Исполнителем в том случае, если денежные средства еще не были переведены на указанные реквизиты Заказчика. В случае аннулирования договора, возврат электронной валюты производится в течение 24 часов с момента получения требовании о расторжении договора. Если задержки при возврате возникли не по вине Исполнителя, он не несет за них ответственности.
            </Text>
            <Text style={styles.paragraph}>
                5.3. Если титульные знаки не поступают от Заказчика на счет Исполнителя в течение указанного срока, с момента подачи заявки Заказчиком, соглашение между сторонами расторгается Исполнителем с одной стороны, так как договор не вступает в действие. Заказчик может об этом не уведомляться. Если титульные знаки поступает на реквизиты Исполнителя после указанного срока, то такие средства переводятся обратно на счет Заказчика, причем все комиссионные расходы, связанные с переводом, вычитаются из данных средств.
            </Text>
            <Text style={styles.paragraph}>
                5.4. Если происходит задержка перевода средств на реквизиты, указанные Заказчиком, по вине расчетной системы, Исполнитель не несет ответственности за ущерб, возникающий в результате долгого поступления денежных средств. В этом случае Заказчик должен согласиться с тем, что все претензии будут предъявляться к расчетной системе, а Исполнитель оказывает свою помощь по мере своих возможностей в рамках закона.
            </Text>
            <Text style={styles.paragraph}>
                5.5. В случае обнаружения подделки коммуникационных потоков или оказания воздействия, с целью ухудшить работу Исполнителя, а именно его программного кода, заявка приостанавливается, а переведенные средства подвергаются перерасчету в соответствии с действующим соглашением. Если Заказчик не согласен с перерасчетом, он имеет полное право расторгнуть договор и титульные знаки отправятся на реквизиты указанные Заказчиком.
            </Text>
            <Text style={styles.paragraph}>
                5.6. В случае пользования услугами Исполнителя, Заказчик полностью соглашается с тем, что Исполнитель несет ограниченную ответственность соответствующую рамкам настоящих правил полученных титульных знаков и не дает дополнительных гарантий Заказчику, а также не несет перед ним дополнительной ответственности. Соответственно Заказчик не несет дополнительной ответственности перед Исполнителем.
            </Text>
            <Text style={styles.paragraph}>
                5.7. Заказчик обязуется выполнять нормы соответствующие законодательству, а также не подделывать коммуникационные потоки и не создавать препятствий для нормальной работы программного кода Исполнителя.
            </Text>
            <Text style={styles.paragraph}>
                5.8. Исполнитель не несет ответственности за ущерб и последствия при ошибочном переводе электронной валюты в том случае, если Заказчик указал при подаче заявки неверные реквизиты.
            </Text>

            <Text style={styles.title}>6. Гарантийный срок.</Text>
            <Text style={styles.paragraph}>
                В течение 24 часов с момента исполнения обмена титульных знаков Исполнитель дает гарантию на оказываемые услуги при условии, если не оговорены иные сроки.
            </Text>

            <Text style={styles.title}>7. Непредвиденные обстоятельства.</Text>
            <Text style={styles.paragraph}>
                В случае, когда в процессе обработки заявки Заказчика возникают непредвиденные обстоятельства, способствующие невыполнению Исполнителем условий договора, сроки выполнения заявки переносятся на соответствующий срок длительности форс-мажора. За просроченные обязательства Исполнитель ответственности не несет.
            </Text>

            <Text style={styles.title}>8. Форма соглашения.</Text>
            <Text style={styles.paragraph}>
                Данное соглашение обе стороны, в лице Исполнителя и Заказчика, принимают как равноценный по юридической силе договор, обозначенный в письменной форме.
            </Text>

            <Text style={styles.title}>9. Работа с картами Англии, Германии и США.</Text>
            <Text style={styles.paragraph}>
                Для владельцев карт стран Англии, Германии и США условия перевода титульных знаков продляются на неопределенный срок, соответствующий полной проверке данных владельца карты. Денежные средства в течение всего срока не подвергаются никаким операциям и в полном размере находятся на счете Исполнителя.
            </Text>

            <Text style={styles.title}>10. Претензии и споры.</Text>
            <Text style={styles.paragraph}>
                Претензии по настоящему соглашению принимаются Исполнителем в форме электронного письма, в котором Заказчик указывает суть претензии. Данное письмо отправляется на указанные на сайте реквизиты Исполнителя.
            </Text>

            <Text style={styles.title}>11. Проведение обменных операций.</Text>
            <Text style={styles.paragraph}>
                11.1.Категорически запрещается пользоваться услугами Исполнителя для проведения незаконных переводов и мошеннических действий. При заключении настоящего договора, Заказчик обязуется выполнять эти требования и в случае мошенничества нести уголовную ответственность, установленную законодательством на данный момент.
            </Text>
            <Text style={styles.paragraph}>
                11.2. В случае невозможности выполнения заявки автоматически, по не зависящим от Исполнителя обстоятельствам, таким как отсутствие связи, нехватка средств, или же ошибочные данные Заказчика, средства поступают на счет в течение последующих 24 часов или же возвращается на реквизиты Заказчика за вычетом комиссионных расходов.
            </Text>
            <Text style={styles.paragraph}>
                11.3.По первому требованию Исполнитель вправе передавать информацию о переводе электронной валюты правоохранительным органам, администрации расчетных систем, а также жертвам неправомерных действий, пострадавшим в результате доказанного судебными органами мошенничества.
            </Text>
            <Text style={styles.paragraph}>
                11.4. Заказчик обязуется представить все документы, удостоверяющие его личность, в случае подозрения о мошенничестве и отмывании денег.
            </Text>
            <Text style={styles.paragraph}>
                11.5. Заказчик обязуется не вмешиваться в работу Исполнителя и не наносить урон его программной и аппаратной части, а также Заказчик обязуется передавать точные сведения для обеспечения выполнения Исполнителем всех условий договора.
            </Text>
            
            <Text style={styles.title}>12.Отказ от обязательств.</Text>
            <Text style={styles.paragraph}>
                Исполнитель имеет право отказа на заключение договора и выполнение заявки, причем без объяснения причин. Данный пункт применяется по отношению к любому клиенту.
            </Text>
            <Text style={[ styles.title, styles.paragraph ]}>
                Актуален с 12.07.2021
            </Text>
            <Text style={[ styles.title, styles.paragraph ]}>
                Руководство сервиса Flymoney.biz
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