
class PresetAll extends Preset {
    constructor(isDefault) {
        super('выбрать всё', [], false, isDefault);
    }
}

class PresetNothing extends Preset {
    constructor(isDefault) {
        super('ничего', [], true, isDefault);
    }
}

class PresetMeetEZ extends Preset {
    constructor(isDefault) {
        super(
            'лёгкая сложность',
            subSets.meetings.Легкая,
            true,
            isDefault,
            true
        );
    }
}

class PresetMeetMedium extends Preset {
    constructor(isDefault) {
        super(
            'средняя',
            subSets.meetings.Средняя,
            true,
            isDefault,
            true
        );
    }
}

class PresetMeetSemiHard extends Preset {
    constructor(isDefault) {
        super(
            'выше среднего',
            subSets.meetings["Выше среднего"],
            true,
            isDefault,
            true
        );
    }
}

class PresetMeetHard extends Preset {
    constructor(isDefault) {
        super(
            'высокая',
            subSets.meetings["Высокая"],
            true,
            isDefault,
            true
        );
    }
}

class PresetImplantL1 extends Preset {
    constructor(isDefault) {
        super(
            'уровень 1',
            subSets.implants["Уровень 1"],
            true,
            isDefault,
            true
        );
    }
}

class PresetImplantL2 extends Preset {
    constructor(isDefault) {
        super(
            'уровень 2',
            subSets.implants["Уровень 2"],
            true,
            isDefault,
            true
        );
    }
}

class PresetImplantL3 extends Preset {
    constructor(isDefault) {
        super(
            'уровень 3',
            subSets.implants["Уровень 3"],
            true,
            isDefault,
            true
        );
    }
}
