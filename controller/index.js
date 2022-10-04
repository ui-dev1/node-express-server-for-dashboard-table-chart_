const chartData = require('../response/chartData.json');
const tableData = require('../response/tableData.json');
const widgets = require('../response/userWidgets.json');
const superadminWidgets = require('../response/superAdminWidgets.json');

exports.getWidgets = (req, res, next) => {
    const { role } = req.params;
    if (role === 'SuperAdmin') {
        res.status(200).json(superadminWidgets);
    }
    res.status(200).json(widgets);

}

exports.chartData = (req, res, next) => {
    res.status(200).json(chartData);
}

exports.tableData = (req, res, next) => {
    res.status(200).json(tableData);
}
