using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Core.Specifications
{
    public interface ISpecification<T>
    {
        //Expression takes function
        //and Func take type of T what it returning as bool
        //Criteria is ex: product has a type of 1 or type of id of 1
        
         Expression<Func<T, bool>> Criteria {get;}
         //Include navigation property
         List<Expression<Func<T, object>>> Includes {get;}
    }
}