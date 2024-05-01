import { Request, Response } from "express";
import Task from "../models/task.model";
import { paginationHelper } from "../../../helpers/pagination";
import { searchHelper } from "../../../helpers/search";

export const index = async (req: Request, res: Response) => {
    // Find
    interface Find {
        deleted: boolean,
        status?: string,
        title?: RegExp
    }
    
    const find: Find = {
        deleted: false
    };

    if(req.query.status) {
        find.status = req.query.status.toString();
    }
    // End Find

    // Search
    const objectSearch = searchHelper(req.query);

    if(objectSearch.regex) {
        find.title = objectSearch.regex;
    }
    
    // End Search

    // Phân trang
    const countTasks = await Task.countDocuments(find);

    let objectPagination = paginationHelper(
        {
            currentPage: 1,
            limitItems: 2,
        },
        req.query,
        countTasks
    );
    // Hết Phân trang

    // Sort
    const sort = {};
    if(req.query.sortKey && req.query.sortValue){
        const sortKey = req.query.sortKey.toString();
        sort[sortKey] = req.query.sortValue;
    }
    // End Sort
    const tasks = await Task.find(find)
                            .sort(sort)
                            .limit(objectPagination.limitItems)
                            .skip(objectPagination.skip);

    res.json({
        total: countTasks,
        data: tasks
    });
}

export const detail = async (req: Request, res: Response) => {
    const id: string = req.params.id;

    const task = await Task.findOne({
        _id: id,
        deleted: false
    });

    res.json(task);
}
