How to use it:
1. Install and import the VanillaCalendar component.
    # NPM
    $ npm i @uvarov.frontend/vanilla-calendar
    import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';

2. Or load the JavaScript library directly in the document.
    <link rel="stylesheet" href="build/vanilla-calendar.min.css" />
    <script src="build/vanilla-calendar.min.js"></script>

3. Add the CSS class ‘vanilla-calendar’ to the target container where the library generates the calendar.
    <div class="vanilla-calendar"></div>

4. Generate a basic calendar.
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        // Options
    });
    calendar.init();

5. Set the calendar type: ‘default’ | ‘multiple’ | ‘month’ | ‘year’.
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        type: 'multiple',
    });

6. Specify the number of months to display if the calendar type is defined as “multiple”. Default: 2.
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        months: 2,
    });

7. Date configs.
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        date: {
            min: '1970-01-01',
            max: '2470-12-31',
            today: new Date('2022-01-07'),
        },
    });

8. Determine whether to use ISO 8601 format. (Default: true,)
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        settings: {
            iso8601: false,
        },
    });

9. Date range configs.
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        settings: {
            range: {
            min: '2022-05-01',
            max: '2022-05-13',
            disablePast: false, 
            disableGaps: false,
            disableWeekday: false,
            disabled: [], // disabled dates
            enabled: [], // disabled dates
            },
        },
    });

10. Date selection configs.
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        settings: {
            selected: {
            dates: ['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04'],
            time: '03:44 AM',
            month: 5,
            year: 2022,
            holidays: ['2022-12-24', '2022-12-25'],
            },
            selection: {
            day: 'single', // 'single' | 'multiple' | 'multiple-ranged'
            month: true,
            year: true,
            time: false,
            controlTime: 'all', // 'all' | 'range'
            stepHours: 1,
            stepMinutes: 1,
            },
        },
    });
11. Set the visibility of the calendar.
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        settings: {
            visibility: {
            // hightlights weekends
            weekend: true,
            // highlights today
            today: true,
            // abbreviated names of months in the month selection
            monthShort: true,
            // show week numbers of the year
            weekNumbers: false,
            // show all days, including disabled ones.s
            disabled: false,
            // show the days of the past and next month.
            daysOutside: true,
            },
        },
    });

12. Set the language of the calendar.
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        settings: {
            lang: 'en',
        },
    });
    // OR
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        settings: {
            lang: 'define',
        },
        locale: {
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            weekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
    });

13. Change the default DOM templates.
    new VanillaCalendar('#calendar', {
        DOMTemplates: {
        default: `
            <div class="vanilla-calendar-header">
            <#ArrowPrev />
            <div class="vanilla-calendar-header__content">
                <#Month />
                <#Year />
            </div>
            <#ArrowNext />
            </div>
            <div class="vanilla-calendar-wrapper">
            <#WeekNumbers />
            <div class="vanilla-calendar-content">
                <#Week />
                <#Days />
            </div>
            </div>
            <#ControlTime />
        `
        }
    });
    // default month selection template
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        DOMTemplates: {
            month: `
            <div class="vanilla-calendar-header">
                <div class="vanilla-calendar-header__content">
                <#Month />
                <#Year />
                </div>
            </div>
            <div class="vanilla-calendar-wrapper">
                <div class="vanilla-calendar-content">
                <#Months />
                </div>
            </div>
            `
        }
    });

14. Available events.
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        actions: {
            clickDay(event, dates) {},
            clickWeekNumber(event, number, days, year) {},
            clickMonth(e, month) {},
            clickYear(event, year) {},
            clickArrow(event, year, month) {},
            changeTime(event, time, hours, minutes, keeping) {},
        },
    });

15. Config the hover-triggered popup.
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        popups: {
            '2022-06-28': {
            modifier: 'bg-red',
            html: 'Meeting at 9:00 PM',
            },
        }
    });

16. Override the default CSS classes.
    const calendar = new VanillaCalendar('#vanilla-calendar', {
        CSSClasses: {
            calendar: 'vanilla-calendar',
            calendarDefault: 'vanilla-calendar_default',
            calendarMultiple: 'vanilla-calendar_multiple',
            calendarMonth: 'vanilla-calendar_month',
            calendarYear: 'vanilla-calendar_year',
            controls: 'vanilla-calendar-controls',
            grid: 'vanilla-calendar-grid',
            column: 'vanilla-calendar-column',
            header: 'vanilla-calendar-header',
            headerContent: 'vanilla-calendar-header__content',
            month: 'vanilla-calendar-month',
            monthDisabled: 'vanilla-calendar-month_disabled',
            year: 'vanilla-calendar-year',
            yearDisabled: 'vanilla-calendar-year_disabled',
            arrow: 'vanilla-calendar-arrow',
            arrowPrev: 'vanilla-calendar-arrow_prev',
            arrowNext: 'vanilla-calendar-arrow_next',
            wrapper: 'vanilla-calendar-wrapper',
            content: 'vanilla-calendar-content',
            week: 'vanilla-calendar-week',
            weekDay: 'vanilla-calendar-week__day',
            weekDayWeekend: 'vanilla-calendar-week__day_weekend',
            days: 'vanilla-calendar-days',
            daysSelecting: 'vanilla-calendar-days_selecting',
            months: 'vanilla-calendar-months',
            monthsSelecting: 'vanilla-calendar-months_selecting',
            monthsMonth: 'vanilla-calendar-months__month',
            monthsMonthSelected: 'vanilla-calendar-months__month_selected',
            monthsMonthDisabled: 'vanilla-calendar-months__month_disabled',
            years: 'vanilla-calendar-years',
            yearsSelecting: 'vanilla-calendar-years_selecting',
            yearsYear: 'vanilla-calendar-years__year',
            yearsYearSelected: 'vanilla-calendar-years__year_selected',
            yearsYearDisabled: 'vanilla-calendar-years__year_disabled',
            time: 'vanilla-calendar-time',
            timeContent: 'vanilla-calendar-time__content',
            timeHours: 'vanilla-calendar-time__hours',
            timeMinutes: 'vanilla-calendar-time__minutes',
            timeKeeping: 'vanilla-calendar-time__keeping',
            timeRanges: 'vanilla-calendar-time__ranges',
            timeRange: 'vanilla-calendar-time__range',
            day: 'vanilla-calendar-day',
            daySelected: 'vanilla-calendar-day_selected',
            daySelectedFirst: 'vanilla-calendar-day_selected-first',
            daySelectedLast: 'vanilla-calendar-day_selected-last',
            daySelectedIntermediate: 'vanilla-calendar-day_selected-intermediate',
            dayPopup: 'vanilla-calendar-day__popup',
            dayBtn: 'vanilla-calendar-day__btn',
            dayBtnPrev: 'vanilla-calendar-day__btn_prev',
            dayBtnNext: 'vanilla-calendar-day__btn_next',
            dayBtnToday: 'vanilla-calendar-day__btn_today',
            dayBtnSelected: 'vanilla-calendar-day__btn_selected',
            dayBtnHover: 'vanilla-calendar-day__btn_hover',
            dayBtnDisabled: 'vanilla-calendar-day__btn_disabled',
            dayBtnIntermediate: 'vanilla-calendar-day__btn_intermediate',
            dayBtnWeekend: 'vanilla-calendar-day__btn_weekend',
            dayBtnHoliday: 'vanilla-calendar-day__btn_holiday',
            weekNumbers: 'vanilla-calendar-week-numbers',
            weekNumbersTitle: 'vanilla-calendar-week-numbers__title',
            weekNumbersContent: 'vanilla-calendar-week-numbers__content',
            weekNumber: 'vanilla-calendar-week-number',
            isFocus: 'vanilla-calendar-is-focus',
        },
    });

17. Change settings and update the calendar.
    calendar.date.today = new Date('2022-07-25');
    calendar.settings.lang = 'en';
    calendar.settings.selected.date = '2022-07-15';
    calendar.update();
    calendar.reset();