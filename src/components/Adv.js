import React from "react";
import { reduxForm } from "redux-form";
import "../styles/Adv.css";

class Adv extends React.Component {
  renderTitle = ({ title, input, meta }) => {
    // console.log(this.props);
    // console.log(meta);
    // console.log(input);
    input.value = title;
    return (
      <div>
        <input type="text" {...input} />
        {/* {title} */}
      </div>
    );
  };

  render() {
    const {
      title,
      description,
      phone,
      city,
      src,
      // input,
      // handleSubmit,
      // reset,
      // destroy,
      // change,
      onDelete,
      onEdit
      // id
    } = this.props;

    console.log(this.props);

    return (
      <div
        className="adv-item"
        // onSubmit={handleSubmit}
        // ref={advDelete => (this.advDelete = advDelete)}
      >
        {/* <Field name={title} title={title} component={this.renderTitle} /> */}
        <div className="font-adv main-info-adv">
          <div>
            <div className="title-adv">{title}</div>
            <div className="description-adv">{description || "Описание"}</div>
            <img
              className="img-adv"
              src={
                src ||
                "https://cdn4.iconfinder.com/data/icons/oakcons-2/16/Image-512.png"
              }
              alt={title}
            />
          </div>
          <div className="sidebar-adv">
            <div>{phone}</div>
            <div>{city || "Город"}</div>
            <button
              className={"button-adv button-edit"}
              onClick={e => {
                e.preventDefault();
                console.log("EDIT");
                console.log(this.props);
                console.log({
                  title,
                  description,
                  phone /* , id  */ /* city, src  */
                });
                onDelete(title);
                return onEdit({
                  title,
                  description,
                  phone,
                  city,
                  src
                  //TODO: при редактировании фото теряется, исправить
                  /* , id */
                });
                // return null;
                // return this.advDelete.click();
                // return reset;
              }}
            >
              Редактировать
            </button>
            <button
              className={"button-adv button-delete"}
              onClick={e => {
                e.preventDefault();
                // e.stopPropagation();
                // console.log(localStorage);
                return onDelete(title);
              }}
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    );
  }
}
// const onSubmit = (values, dispatch) => {
//   console.log(values);
//   // alert(`You deleted this title:\n\n${JSON.stringify(values, null, 2)}`);
//   return dispatch(handleAdvDelete(values));
// };

// const mapStateToProps = state => {
//   return { submittedForms: state.submitForm };
// };

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       handleAdvDelete,
//       handleAdvEdit
//     },
//     dispatch
//   );
// };

// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Adv);

export default reduxForm({
  form: "advForm"
  // , onSubmit
})(Adv);

// return disptach(handleAdvDelete(this.props.title));

// return dispatch(handleAdvDelete());
// dispatch(
//   handleFormSubmit()
//   {
//   type: "ADV_DELETE"
// }
// );

/* <Field
      name="deleteButton"
      component={() => <button>Удалить</button>}
      >
      Удалить
    </Field> */
