import React from 'react';
import Advice from '../Components/Advice';
import AdviceList from '../Components/AdviceList';

function Help() {
    return (
        <div className='help'>
            <h1><center>Инструкция по использованию</center></h1>
            <div>
                <main>
                    <Advice question='Как построить маршрут?' text={`
                    Для постоения маршрута вам необходимо нажать на нужный
                    город на карте на главной странице сайта.
                    После появления метки с названием города и прогрузки
                    доступных для доставки городов, вам будет доступна
                    функция выбора городов в поле «Населённые пункты».
                    Для выбора конкретного города необходимо нажать на
                    название города, после чего слева от него появится отметка.
                    Также необходимо выбрать грузовик в поле «Выбор грузовика».
                    После того, как грузовик и необходимые города для доставки
                    будут выбраны, нажмите на кнопку «Построить маршрут» в верху страницы.`}
                        highlights={['«Населённые пункты»', '«Выбор грузовика»', '«Построить маршрут»']} id='adv1'
                    />
                    <Advice question='Как выбрать несколько грузовиков для одного маршрута?' text={`
                    Для выбора нескольких грузовиков для одного маршрута
                    необходимо в поле «Выбор грузовика» нажать на
                    соответствующую кнопку «Выбор нескольких грузовиков»
                    и нажать на нужные вам грузовики, после чего слева от них появится отметка.`}
                        highlights={['«Выбор нескольких грузовиков»', '«Выбор грузовика»']} id='adv2'
                    />
                    <Advice question='Как добавить в маршрут город, не относящийся к выбранному району?' text={`
                    Для добавления города, не относящегося к выбранному району,
                    пролистните в самый конец списка городов, перечисленных в
                    поле «Населённые пункты»,
                    и нажмите на кнопку «Добавить».
                    Вам откроется окно добавления города, в котором вы можете
                    ввести и выбрать необходимый город, либо найти его по
                    району и области. Для выбора города необходимо по нему
                    нажать, после чего цвет названия города изменится на синий.
                    Далее нажмите на кнопку «Добавить» внутри окна.`}
                        highlights={['«Населённые пункты»', '«Добавить»']} id='adv3'
                    />
                    <Advice question='Где можно узнать итоговый маршрут?' text={`
                    Чтобы узнать итоговый маршрут вам необходимо пролистать
                    вниз главной страницы и просмотреть
                    поле «Маршрут».`}
                        highlights={['«Маршрут»']} id='adv4'
                    />
                    <Advice question='Где можно просмотреть детали маршрута?' text={`
                    Детали маршрута можно увидеть на главной странице под картой,
                    в поле «Детали маршрута».`}
                        highlights={['«Детали маршрута»']} id='adv5'
                    />
                    <Advice question='Как сохранить маршрут?' text={`
                    Чтобы сохранить маршрут необходимо нажать на
                    кнопку «Сохранить маршрут».`}
                        highlights={['«Сохранить маршрут»']} id='adv6'
                    />
                    <Advice question='Как отменить выбор города или грузовика?' text={`
                    Для отмены выбора города или грузовика вам необходимо
                    нажать на кнопку «Сбросить» в верху
                    главной страницы.`}
                        highlights={['«Сбросить»']} id='adv7'
                    />
                    <Advice question='Как войти в аккаунт?' text={`
                    Для входа в аккаунт необходимо перейти на страницу авторизации,
                    что возможно сделать, нажав на кнопку «Вход» в
                    хедере. Далее вам надо введи свой логин и пароль от аккаунта
                    и нажать на кнопку «Вход» на форме.`}
                        highlights={['«Вход»']} id='adv8'
                    />
                    <Advice question='Как узнать подробную информацию о городе или грузовике?' text={`
                    Чтобы узнать подробную информацию о городе или грузовике 
                    вам необходимо перейти в личный кабинет, нажав на 
                    соответствующую кнопку в хедере. После перехода на 
                    страницу личного кабинета, нажмите в меню слева на нужный вам 
                    справочник: «Справочник автомобилей» для 
                    грузовиков и «Справочник населённых пунктов» для 
                    городов. Далее нажмите на название нужного вам грузовика либо города.`}
                        highlights={['«Справочник автомобилей»', '«Справочник населённых пунктов»']} id='adv9'
                    />
                    <Advice question='Как узнать подробную статистику грузовика или маршрута?' text={`
                    Чтобы узнать подробную статистику грузовика или маршрута 
                    вам необходимо перейти в личный кабинет, нажав на 
                    соответствующую кнопку в хедере. После перехода на 
                    страницу личного кабинета, нажмите в меню слева на нужную вам 
                    статистику: «Статистика по машинам» для 
                    грузовиков и «Статистика по маршрутам» для 
                    маршрутов. Далее нажмите на название нужного вам грузовика либо маршрута.`}
                        highlights={['«Статистика по машинам»', '«Статистика по маршрутам»']} id='adv10'
                    />
                    <Advice question='Как создать отчёт?' text={`
                    Для создания отчёта вам необходимо перейти в личный кабинет, нажав на 
                    соответствующую кнопку в хедере. После перехода на страницу личного 
                    кабинета, нажмите в меню слева на пункт «Создание отчётов». Далее выберите
                    необходимый к созданию отчёт из предложенных и нажмите кнопку «Скачать».`}
                        highlights={['«Создание отчётов»', '«Скачать»']} id='adv11'
                    />
                    <Advice question='Как выбрать конкретные даты для отчёта?' text={`
                    Чтобы выбрать конкретные даты для отчёта на странице личного кабинета во
                    вкладке «Создание отчётов» вам необходимо нажать на кнопку «Определить даты».
                    Далее выберите начальную и конечную даты и нажмите кнопку «Скачать».`}
                        highlights={['«Создание отчётов»', '«Определить даты»', '«Скачать»']} id='adv12'
                    />
                </main>
                <aside>
                    <AdviceList />
                </aside>
            </div>
        </div>
    );
}

export default Help;